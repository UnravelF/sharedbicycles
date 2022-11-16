<template>
  <div class="gf-form">
    <!-- 头部插槽 -->
    <div class="header">
      <slot name="header"></slot>
    </div>
    <!-- 表单搜索内容 -->
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                  clearable
                  v-model="modValue[`${item.field}`]"
                />
              </template>
              <!-- 判断类型下拉框 -->
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  clearable
                  v-model="modValue[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    :label="option.label"
                    >{{ option.label }}</el-option
                  >
                </el-select>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <!-- 底部插槽 -->
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    formItems: {
      type: Array,
      default: () => []
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  model: {
    prop: 'modelValue',
    event: 'update:modelValue'
  },
  data() {
    return {
      modValue: this.modelValue
    }
  },
  methods: {
    // handleValueChange(value, field) {
    //   this.$emit('update:modelValue', { ...this.modelValue, [field]: value })
    // }
  },
  watch: {
    modValue(value) {
      console.log('子组件下拉框发生改变：', this.modValue)
      this.$emit('update:modelValue', this.modValue)
    }
  }
}
</script>

<style lang="less" scoped>
.gf-form {
  padding-top: 22px;
}
</style>
