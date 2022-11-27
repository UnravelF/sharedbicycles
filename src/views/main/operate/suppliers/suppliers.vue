<template>
  <div class="suppliers">
    <!-- 列表 -->
    <page-content
      ref="pageContentRef"
      pageName="suppliers"
      :contentTableConfig="contentConfig"
      class="page-content"
    />
  </div>
</template>

<script>
import PageContent from '@/components/page-content/page-content.vue'
import { contentTableConfig } from './config/content-config'

export default {
  name: 'Suppliers',
  components: {
    PageContent
  },
  computed: {
    contentConfig() {
      return contentTableConfig
    }
  }
}
</script>

<style lang="less" scoped>
.page-content {
  border-top: 0;
}
</style>
