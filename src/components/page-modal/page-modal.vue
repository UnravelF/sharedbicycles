<template>
  <div class="page-modal">
    <el-dialog
      :visible.sync="dialogVisible"
      title="新建工单"
      width="30%"
      center
      :destroy-on-close="true"
      :modal-append-to-body="false"
    >
      <!-- 表单 -->
      <g-form v-bind="modalConfig" v-model="formData" />
      <!-- 底部按钮 -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleConfirmClick">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import GForm from '../../base-ui/form/form.vue'

export default {
  name: 'PageModal',
  components: {
    GForm
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    // 传递过来的form数据对象
    defaultInfo: {
      type: Object,
      default: () => {}
    },
    otherInfo: {
      type: Object,
      default: () => {}
    },
    pageName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dialogVisible: false
      // formData: {}
    }
  },
  computed: {
    formData: {
      get: function () {
        const formOriginData = {}
        for (const item of this.modalConfig.formItems) {
          formOriginData[`${item.field}`] = ''
        }
        return formOriginData
      },
      set: function (newValue) {
        return newValue
      }
    }
  },
  methods: {
    // 确定事件
    handleConfirmClick() {
      this.dialogVisible = false
      // 区分新建确定还是编辑确定
      if (Object.keys(this.defaultInfo).length) {
        // 编辑
        this.$store.dispatch('system/editPageDataAction', {
          pageName: this.pageName,
          editData: this.formData,
          id: this.defaultInfo.id
        })
      } else {
        // 新建列表数据
        this.$store.dispatch('system/createPageDataAction', {
          pageName: this.pageName,
          newData: this.formData
        })
      }
    }
  },
  watch: {
    defaultInfo: {
      handler: function (newValue, oldVal) {
        for (const item of this.modalConfig.formItems) {
          this.formData[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
