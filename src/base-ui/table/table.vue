<template>
  <div class="gf-table">
    <!-- table头部 -->
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <!-- 列表数据展示 -->
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <!-- 选择器列 -->
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <!-- 序号列 -->
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <!-- 动态渲染属性列 -->
      <template v-for="propItem in propList">
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
          <template slot-scope="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- table底部 -->
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          :currentPage="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          layout="->,total, sizes, prev, pager, next, jumper"
          :total="listCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    title: {
      type: String,
      default: ''
    },
    // 渲染的列表数据
    listData: {
      type: Array,
      required: true
    },
    listCount: {
      type: Number,
      default: 0
    },
    // 渲染列表的属性
    propList: {
      type: Array,
      required: true
    },
    // 是否展示序号
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    // 是否展示却选按钮选择框
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    // page-content绑定过来的分页器相关属性信息
    page: {
      type: Object,
      default: () => ({ currentPage: 0, pageSize: 10 })
    },
    model: {
      prop: 'page',
      event: 'update:page'
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  methods: {
    handleSelectionChange() {},
    handleSizeChange(pageSize) {
      console.log(pageSize)
      this.$emit('update:page', { ...this.page, pageSize })
    },
    handleCurrentChange(currentPage) {
      console.log(currentPage)
      this.$emit('update:page', { ...this.page, currentPage })
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;
}
</style>
