<template>
  <div class="login-panel">
    <h1 class="title">共享单车状态管理系统</h1>
    <!-- 登录表单 -->
    <login-form ref="loginForm" />
    <!-- 记住密码 -->
    <div class="login-control">
      <el-checkbox v-model="iskeepPassword">记住密码</el-checkbox>
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>
    <!-- 立即登录 -->
    <el-button type="primary" class="login-btn" @click="handleLoginClick">
      立即登录
    </el-button>
  </div>
</template>

<script>
import LoginForm from './login-form.vue'

export default {
  name: 'Login-panel',
  components: {
    LoginForm
  },
  data() {
    return {
      iskeepPassword: true
    }
  },
  methods: {
    handleLoginClick() {
      this.$refs['loginForm'].loginAction(this.iskeepPassword)
    }
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  margin-bottom: 150px;
  width: 500px;

  .title {
    font-size: 30px;
    text-align: center;
    margin-bottom: 60px;
  }
  .login-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 40px;
    padding: 15px 0;
    box-shadow: 0 3px 10px 0 #409effbf;
  }
}
</style>
