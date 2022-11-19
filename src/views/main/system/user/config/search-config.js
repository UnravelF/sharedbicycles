export const searchFormConfig = {
  labelWidth: '120px',
  headerTitle: '用户查询',
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
      field: 'name',
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    }
  ]
}
