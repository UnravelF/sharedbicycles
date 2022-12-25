<template>
  <div class="user">
    <!-- 搜索框 -->
    <page-search
      :searchFormConfig="searchConfig"
      @queryBtnClick="handleQueryClick"
    />
    <!-- 列表 -->
    <page-content
      :contentTableConfig="contentConfig"
      ref="pageContentRef"
      pageName="users"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    />
    <!-- 新建/编辑用户表单 -->
    <page-modal
      :modal-config="modalConfig"
      page-name="users"
      ref="pageModalRef"
      :default-info="defaultInfo"
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
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  data() {
    return {
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
      console.log(queryInfo)
      this.$refs.pageContentRef.getPageData(queryInfo)
    },
    getOptions() {
      // 动态获取角色选项
      const roleItem = this.modalConfig.formItems.find(
        (item) => item.field === 'role'
      )
      roleItem.options = this.$store.state.roleList.map((item) => {
        return { label: item.rolename, value: item.id }
      })
      // 新建用户时显示密码框项
      const passwordItem = this.modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem.isHidden = false
    },
    handleNewData() {
      this.defaultInfo = {}
      this.getOptions()
      this.$refs.pageModalRef.dialogVisible = true
    },
    handleEditData(item) {
      this.getOptions()
      // 新建用户时隐藏密码框项
      const passwordItem = this.modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem.isHidden = true
      // 复制对应信息
      this.defaultInfo = { ...item }
      this.defaultInfo.role = this.defaultInfo.role_id
      this.$refs.pageModalRef.dialogVisible = true
    }
  }
}
</script>

<style lang="scss" scoped></style>
