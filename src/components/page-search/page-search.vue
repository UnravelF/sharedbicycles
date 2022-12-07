<template>
  <div class="page-search">
    <g-form v-bind="searchFormConfig" v-model="formData">
      <template slot="header">
        <h2>{{ searchFormConfig.headerTitle }}</h2>
      </template>
      <template slot="footer">
        <div class="handle-btns">
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handleQueryClick"
          >
            搜索
          </el-button>
        </div>
      </template>
    </g-form>
  </div>
</template>

<script>
import GForm from '../../base-ui/form/form.vue'

export default {
  name: 'PageSearch',
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      formItems: this.searchFormConfig.formItems ?? []
    }
  },
  components: {
    GForm
  },
  computed: {
    formData: {
      get: function () {
        const formOriginData = this.originData()
        return formOriginData
      },
      set: function (newValue) {
        return newValue
      }
    }
  },
  methods: {
    originData() {
      const formOriginData = {}
      for (const item of this.formItems) {
        formOriginData[`${item.field}`] = ''
      }
      return formOriginData
    },
    handleQueryClick() {
      this.$emit('queryBtnClick', this.formData)
    }
  }
}
</script>

<style lang="less" scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
