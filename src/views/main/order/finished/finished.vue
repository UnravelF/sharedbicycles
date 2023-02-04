<template>
  <div class="finished">
    <!-- 列表 -->
    <page-content
      ref="pageContentRef"
      pageName="finish"
      :contentTableConfig="contentConfig"
      :queryInfo="query"
    />
  </div>
</template>

<script>
import PageContent from '@/components/page-content/page-content.vue'
import { contentTableConfig } from './config/content-config'

export default {
  name: 'Finsihed',
  components: {
    PageContent
  },
  data() {
    return {
      query: null
    }
  },
  computed: {
    contentConfig() {
      return contentTableConfig
    }
  }
}
</script>

<style lang="scss" scoped></style>
