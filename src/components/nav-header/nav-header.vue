<template>
  <div class="nav-header">
    <i v-if="isFlod" class="el-icon-s-fold fold-menu" @click="handleFoldClick">
    </i>
    <i v-else class="el-icon-s-unfold fold-menu" @click="handleFoldClick"></i>
    <div class="content">
      <!-- 面包屑 -->
      <gf-breadcrumb :breadcrumbs="breadcrumbs" />
      <!-- 右上角用户信息 -->
      <user-info />
    </div>
  </div>
</template>

<script>
import GfBreadcrumb from '../breadcrumbs/breadcrumbs.vue'
import UserInfo from './user-info.vue'

import store from '../../store/index'
import { pathMapToBreadcrumbs } from '../../utils/map-menus'
export default {
  name: 'NavHeader',
  components: {
    GfBreadcrumb,
    UserInfo
  },
  data() {
    return {
      isFlod: false
    }
  },
  methods: {
    handleFoldClick() {
      this.isFlod = !this.isFlod
      this.$emit('foldChange', this.isFlod)
    }
  },
  computed: {
    breadcrumbs() {
      return pathMapToBreadcrumbs(store.state.login.userMenus, this.$route.path)
    }
  }
}
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
    color: #409eff;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
