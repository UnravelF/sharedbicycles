<template>
  <div class="role">
    <!-- 搜索框 -->
    <page-search
      :searchFormConfig="searchConfig"
      @queryBtnClick="handleQueryClick"
    />
    <!-- 列表 -->
    <page-content
      ref="pageContentRef"
      pageName="role"
      :contentTableConfig="contentConfig"
    />
  </div>
</template>

<script>
import PageSearch from '../../../../components/page-search/page-search.vue'
import PageContent from '../../../../components/page-content/page-content.vue'

import { searchFormConfig } from './config/search-config'
import { contentTableConfig } from './config/content-config'

export default {
  name: 'role',
  components: {
    PageSearch,
    PageContent
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
      this.$refs.pageContentRef.getPageData(queryInfo)
    }
  }
}
</script>

<style lang="scss" scoped></style>
