export const rules = {
  name: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[\u4e00-\u9fa5_a-z0-9]{3,10}$/,
      message: '用户名必须是3~10个字母或数字或文字~',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '用户密码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '用户名必须是3位以上的字母或数字~',
      trigger: 'blur'
    }
  ]
}
