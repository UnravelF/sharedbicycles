<template>
  <div class="page-content">PageContent</div>
</template>

<script>
// import store from '../../store'

export default {
  name: 'PageContent',
  props: {
    pageName: {
      type: String,
      required: true
    }
  },
  methods: {
    getPageData(queryInfo) {
      const _that = this
      this.$store.dispatch('system/getPageListAction', {
        pageName: this.pageName,
        queryInfo
      })
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
