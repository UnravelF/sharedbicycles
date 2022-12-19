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
  ],
  area: [
    {
      required: true,
      message: '请选择城市',
      trigger: 'change'
    }
  ],
  brand: [
    {
      required: true,
      message: '请选择品牌',
      trigger: 'change'
    }
  ],
  status: [
    {
      required: true,
      message: '请设置工单状态',
      trigger: 'change'
    }
  ],
  put_amount: [
    {
      required: true,
      message: '投放数量不能为空',
      trigger: 'blur'
    }
  ],
  amount: [
    {
      required: true,
      message: '维修数量不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[3-9][0-9]{2,}$/,
      message: '申报数量至少要30以上~',
      trigger: 'blur'
    }
  ]
}
