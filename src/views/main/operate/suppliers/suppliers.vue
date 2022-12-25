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
      class="page-content"
    />
  </div>
</template>

<script>
import pageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'

import { searchFormConfig } from './config/search-config'
import { contentTableConfig } from './config/content-config'

export default {
  name: 'Suppliers',
  components: {
    pageSearch,
    PageContent
  },
  data() {
    return {
      query: null
    }
  },
  computed: {
    searchConfig() {
      return searchFormConfig
    },
    contentConfig() {
      return contentTableConfig
    }
  },
  methods: {
    handleQueryClick(queryInfo) {
      console.log(queryInfo)
      this.query = queryInfo
      this.$refs.pageContentRef.getPageData(queryInfo)
    }
  }
}
</script>

<style lang="less" scoped></style>
