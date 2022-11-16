<template>
  <div class="user-info">
    <el-dropdown @command="handleExitClick">
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          class="avatar"
        />
        <span>{{ name }}</span>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-error" command="logout">
          退出登录
        </el-dropdown-item>
        <el-dropdown-item icon="el-icon-s-custom" divided>
          用户信息
        </el-dropdown-item>
        <el-dropdown-item icon="el-icon-s-tools"> 系统管理 </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import store from '../../store/index'
import router from '../../router/index'
import localCache from '../../utils/cache'

export default {
  name: 'UserInfo',
  methods: {
    // 退出登录
    handleExitClick(command) {
      if (command) {
        localCache.deleteCache('token')
        router.push('/main')
      }
    }
  },
  computed: {
    name() {
      return store.state.login.userInfo.name
    }
  }
}
</script>

<style lang="less" scoped>
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;

  .avatar {
    margin-right: 5px;
  }
}
</style>
