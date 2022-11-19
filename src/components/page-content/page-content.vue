<template>
  <div class="page-content">
    <gf-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model="pageInfo"
    >
      <!-- header的插槽 -->
      <template slot="headerHandler">
        <el-button type="primary" size="small">
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
      <template #handler="">
        <div class="handle-btns">
          <el-button
            icon="el-icon-edit-outline"
            size="small"
            link
            type="text"
            class="edit"
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
    }
  },
  created() {
    // 获取列表数据
    this.getPageData()
  },
  methods: {
    getPageData(queryInfo) {
      this.$store.dispatch(`system/getPageListAction`, {
        pageName: this.pageName,
        queryInfo,
        pageInfo: this.pageInfo
      })
    },
    handleResetClick() {
      this.getPageData()
    }
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
    pageInfo() {
      return { currentPage: 1, pageSize: 10 }
    }
  },
  watch: {
    pageInfo: {
      handler: function (val, oldVal) {
        this.getPageData()
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