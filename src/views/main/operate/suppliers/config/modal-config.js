export const modalConfig = {
  formItems: [
    {
      field: 'brand',
      type: 'input',
      label: '供应商名称',
      rules: [
        {
          required: true,
          message: '供应商名称不能为空',
          trigger: 'blur'
        }
      ],
      placeholder: '请输入供应商名称'
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {}
}
