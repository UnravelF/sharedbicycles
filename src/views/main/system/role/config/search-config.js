export const searchFormConfig = {
  labelWidth: '120px',
  itemStyle: {
    padding: '10px 40px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'Id',
      rules: [],
      placeholder: '请输入Id'
    },
    {
      field: 'rolename',
      type: 'select',
      label: '角色名称',
      rules: [],
      placeholder: '请选择角色名称',
      options: [
        { label: '超级管理员', value: '超级管理员' },
        { label: '供应商', value: '供应商' },
        { label: '设备管理员', value: '设备管理员' }
      ]
    }
  ]
}
