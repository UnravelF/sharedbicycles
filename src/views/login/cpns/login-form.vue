<template>
  <div class="login-form">
    <el-form
      label-width="100px"
      :rules="rules"
      :model="user"
      ref="formRef"
      label-position="top"
    >
      <div class="login-title">SIGN IN</div>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="user.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { rules } from '@/utils/rules'
import localCache from '../../../utils/cache'

export default {
  name: 'Login-Form',
  data() {
    return {
      user: {
        name: localCache.getCache('name') ?? '',
        password: localCache.getCache('password') ?? ''
      },
      rules
    }
  },
  methods: {
    loginAction(iskeepPassword) {
      this.$refs['formRef'].validate(async (valid) => {
        if (valid) {
          // 验证登录时的用户选择
          if (iskeepPassword) {
            localCache.setCache('name', this.user.name)
            localCache.setCache('password', this.user.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          // 开始验证登录
          await this.$store.dispatch('login/userLoginAction', { ...this.user })
          if (this.$store.state.login.loginStatus) {
            this.$message.error('用户名或密码错误')
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-title {
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}
</style>
