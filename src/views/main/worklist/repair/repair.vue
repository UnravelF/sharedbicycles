<template>
  <div class="repair">
    <!-- 搜索框 -->
    <page-search
      :searchFormConfig="searchConfig"
      @queryBtnClick="handleQueryClick"
    />
    <!-- 列表 -->
    <page-content
      ref="pageContentRef"
      pageName="repair"
      :contentTableConfig="contentConfig"
      :queryInfo="query"
    />
  </div>
</template>

<script>
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'

import { searchFormConfig } from './config/search-config'
import { contentTableConfig } from './config/content-config'

export default {
  name: 'repair',
  components: {
    PageSearch,
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

<style lang="scss" scoped></style>
