<template>
  <div class="page-content">
    <gf-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      :page="pageInfo"
    >
      <!-- header的插槽 -->
      <template slot="headerHandler">
        <el-button type="primary" size="small" @click="handleNewClick">
          {{ contentTableConfig.handleTitle }}</el-button
        >
        <el-button
          size="small"
          icon="el-icon-refresh-right"
          @click="handleResetClick"
        ></el-button>
      </template>
      <!-- 列中固定的插槽 -->
      <!-- 创建时间 -->
      <template #createAt="scope">
        <span>{{ scope.row.createAt | formatTime }}</span>
      </template>
      <!-- 更新时间 -->
      <template #updateAt="scope">
        <span>{{ scope.row.updateAt | formatTime }}</span>
      </template>
      <!-- 投放时间 -->
      <template #put_time="scope">
        <span>{{ scope.row.put_time | formatTime }}</span>
      </template>
      <!-- 状态 -->
      <template #status="scope">
        <span>{{ scope.row.status === 0 ? '未完成' : '已完成' }}</span>
      </template>
      <!-- 操作 -->
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            icon="el-icon-edit-outline"
            size="small"
            link
            type="text"
            class="edit"
            @click="handleEditClick(scope.row)"
            >编辑</el-button
          >
          <el-button
            icon="el-icon-delete"
            size="small"
            link
            type="text"
            class="delete"
            >删除</el-button
          >
        </div>
      </template>
    </gf-table>
  </div>
</template>

<script>
import GfTable from '../../base-ui/table/table.vue'

export default {
  name: 'PageContent',
  components: {
    GfTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
    queryInfo: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      page: { currentPage: 1, pageSize: 10 }
    }
  },
  created() {
    // 获取列表数据
    this.getPageData()
    // 获取动态选项数据
    this.$store.dispatch('getInitialDataAction')
  },
  computed: {
    // 列表数据
    dataList() {
      return this.$store.getters[`system/pageListData`](this.pageName)
    },
    // 列表数据总数
    dataCount() {
      return this.$store.getters[`system/pageListCount`](this.pageName)
    },
    pageInfo: {
      get: function () {
        return this.page
      },
      set: function (newValue) {
        return newValue
      }
    }
  },
  methods: {
    getPageData(queryInfo) {
      this.$store.dispatch(`system/getPageListAction`, {
        pageName: this.pageName,
        queryInfo,
        pageInfo: this.pageInfo
      })
    },
    // 重置按钮
    handleResetClick() {
      this.getPageData()
    },
    // 新建操作
    handleNewClick() {
      this.$emit('newBtnClick')
    },
    // 编辑操作
    handleEditClick(item) {
      this.$emit('editBtnClick', item)
    }
  },
  watch: {
    pageInfo: {
      handler: function (val, oldVal) {
        this.getPageData(this.queryInfo)
      },
      deep: true
    }
  }
}
</script>

<style lang="less" scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
.edit {
  color: #409eff;
}
.delete {
  color: #f56c6c;
}
</style>
