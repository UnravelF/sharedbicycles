<template>
  <div class="invest">
    <!-- 搜索框 -->
    <page-search
      :searchFormConfig="searchConfig"
      @queryBtnClick="handleQueryClick"
    />
    <!-- 列表 -->
    <page-content
      ref="pageContentRef"
      pageName="invest"
      :contentTableConfig="contentConfig"
      :queryInfo="query"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    />
    <!-- 新建用户表单 -->
    <page-modal
      ref="pageModalRef"
      pageName="invest"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
    ></page-modal>
  </div>
</template>

<script>
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import PageModal from '@/components/page-modal/page-modal.vue'

import { searchFormConfig } from './config/search-config'
import { contentTableConfig } from './config/content-config'
import { modalConfig } from './config/modal-config'

export default {
  name: 'invest',
  components: {
    PageSearch,
    PageContent,
    PageModal
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
    // 搜索点击事件
    handleQueryClick(queryInfo) {
      console.log(queryInfo)
      this.query = queryInfo
      this.$refs.pageContentRef.getPageData(queryInfo)
    },
    // 动态获取配置文件的options
    getOptions() {
      // 动态获取城市点位数据
      const cityItem = this.modalConfig.formItems.find(
        (item) => item.field === 'area'
      )
      cityItem.options = this.$store.state.cityList.map((item) => {
        return { label: item.area, value: item.id }
      })
      // 动态获取品牌数据
      const brandItem = this.modalConfig.formItems.find(
        (item) => item.field === 'brand'
      )
      brandItem.options = this.$store.state.suppliersList.map((item) => {
        return { label: item.brand, value: item.id }
      })
    },
    // 新建列表数据事件
    handleNewData() {
      // 新建时重新赋值空对象
      this.defaultInfo = {}
      this.$refs.pageModalRef.dialogVisible = true
      this.getOptions()
    },
    // 编辑列表数据事件
    handleEditData(item) {
      this.defaultInfo = { ...item }
      console.log(this.defaultInfo)
      // 赋值对应品牌和点位id
      this.defaultInfo.area = this.defaultInfo.cityid
      this.defaultInfo.brand = this.defaultInfo.brandid
      this.$refs.pageModalRef.dialogVisible = true
      this.getOptions()
    }
  }
}
</script>

<style lang="less" scoped></style>
