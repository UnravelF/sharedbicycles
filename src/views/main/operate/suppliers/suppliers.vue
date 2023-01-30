<template>
  <div class="suppliers">
    <!-- 搜索框 -->
    <page-search
      :searchFormConfig="searchConfig"
      @queryBtnClick="handleQueryClick"
    />
    <!-- 列表 -->
    <page-content
      ref="pageContentRef"
      pageName="suppliers"
      :contentTableConfig="contentConfig"
      :queryInfo="query"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    />
    <!-- 新建/编辑供应商表单 -->
    <page-modal
      ref="pageModalRef"
      pageName="suppliers"
      :modal-config="modalConfig"
      :default-info="defaultInfo"
    ></page-modal>
  </div>
</template>

<script>
import pageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import pageModal from '@/components/page-modal/page-modal.vue'

import { searchFormConfig } from './config/search-config'
import { contentTableConfig } from './config/content-config'
import { modalConfig } from './config/modal-config'

export default {
  name: 'Suppliers',
  components: {
    pageSearch,
    PageContent,
    pageModal
  },
  data() {
    return {
      query: null,
      defaultInfo: {}
    }
  },
  computed: {
    searchConfig() {
      return searchFormConfig
    },
    contentConfig() {
      return contentTableConfig
    },
    modalConfig() {
      return modalConfig
    }
  },
  methods: {
    handleQueryClick(queryInfo) {
      this.query = queryInfo
      this.$refs.pageContentRef.getPageData(queryInfo)
    },
    // 新建供应商
    handleNewData() {
      // 新建时重新赋值空对象
      this.defaultInfo = {}
      this.$refs.pageModalRef.dialogVisible = true
    },
    // 编辑供应商
    handleEditData(item) {
      this.defaultInfo = { ...item }
      this.$refs.pageModalRef.dialogVisible = true
    }
  }
}
</script>

<style lang="less" scoped></style>
