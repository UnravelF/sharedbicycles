<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-for="item in breadcrumbs">
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less" scoped>
.el-breadcrumb ::v-deep .el-breadcrumb__inner {
  color: #409eff !important;
}
.el-breadcrumb__item:last-child ::v-deep .el-breadcrumb__inner {
  color: #409eff !important;
}
</style>
