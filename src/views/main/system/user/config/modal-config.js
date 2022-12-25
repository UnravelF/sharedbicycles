export const modalConfig = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      rules: [
        {
          required: true,
          message: '用户名不能为空',
          trigger: 'blur'
        }
      ],
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      type: 'input',
      label: '密码',
      rules: [
        {
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        }
      ],
      placeholder: '请输入初始密码',
      isHidden: true
    },
    {
      field: 'role',
      type: 'select',
      label: '用户角色',
      rules: [
        {
          required: true,
          message: '请选择用户角色',
          trigger: ['blur', 'change']
        }
      ],
      placeholder: '请选择品牌名称',
      options: []
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {}
}
