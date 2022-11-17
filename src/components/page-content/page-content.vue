<template>
  <div class="page-content">
    <gf-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
    >
      <!-- header的插槽 -->
      <template slot="headerHandler">
        <el-button type="primary">
          {{ contentTableConfig.handleTitle }}</el-button
        >
        <el-button icon="el-icon-refresh-right"></el-button>
      </template>
      <!-- 列中固定的插槽 -->
      <!-- 创建时间 -->
      <template #createAt="">
        <span>{{}}</span>
      </template>
      <!-- 更新时间 -->
      <template #updateAt="">
        <span>{{}}</span>
      </template>
      <template #handler="">
        <div class="handle-btns">
          <el-button
            icon="el-icon-edit-outline"
            size="small"
            link
            type="primary"
            >编辑</el-button
          >
          <el-button icon="el-icon-delete" size="small" link type="info"
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
      this.$store.dispatch('system/getPageListAction', {
        pageName: this.pageName,
        queryInfo
      })
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
    }
  }
}
</script>

<style lang="less" scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
