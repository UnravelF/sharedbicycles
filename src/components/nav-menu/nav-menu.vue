<template>
  <div class="nav-menu">
    <!-- logo -->
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title" v-if="!collapse">Bike-sharing</span>
    </div>
    <!-- 侧边导航栏部分 -->
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical"
      :collapse="collapse"
      background-color="#248df6bf"
      text-color="#fff"
      active-text-color="#fff"
      :default-openeds="['1']"
    >
      <template v-for="item in userMenus">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <el-submenu :index="item.id + ''" :key="item.id">
            <!-- 二级菜单的名称及图标 -->
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <!-- 二级菜单的childre菜单 -->
            <template v-for="subitem in item.children">
              <el-menu-item
                :index="subitem.id + ''"
                :key="item.id + '-' + subitem.id"
                @click="handleMenuItemClick(subitem)"
              >
                <i :class="subitem.icon" class="child-icon"></i>
                <span>&ensp;{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.typ === 2">
          <el-menu-item :index="item.icon + ''">
            <i class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import store from '../../store/index'
import { pathMapToMenu } from '../../utils/map-menus'

export default {
  name: 'NavMenu',
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.menu = pathMapToMenu(this.userMenus, this.$route.path)
  },
  data() {
    return {
      menu: null
    }
  },
  computed: {
    userMenus() {
      return store.state.login.userMenus
    },
    defaultValue() {
      return this.menu.id + ''
    }
  },
  methods: {
    handleMenuItemClick(item) {
      this.$router.push({ path: item.menuUrl ?? '/not-found' })
    }
  }
}
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #0d81f5bf;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
  }

  .el-submenu__title i,
  .child-icon {
    color: #fff !important;
  }

  ::v-deep .el-icon-arrow-down:before {
    color: #fff !important;
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #0d81f5bf !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0d81f5bf !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #0d81f5bf !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
