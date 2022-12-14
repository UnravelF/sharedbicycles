export const modalConfig = {
  formItems: [
    {
      field: 'area',
      type: 'select',
      label: '投放城市',
      rules: [
        {
          required: true,
          message: '请选择城市',
          trigger: ['blur', 'change']
        }
      ],
      placeholder: '请选择城市名称',
      options: []
    },
    {
      field: 'brand',
      type: 'select',
      label: '品牌',
      rules: [
        {
          required: true,
          message: '请选择品牌',
          trigger: ['blur', 'change']
        }
      ],
      placeholder: '请选择品牌名称',
      options: []
    },
    {
      field: 'status',
      type: 'select',
      label: '工单状态',
      rules: [
        {
          required: true,
          message: '请选择工单状态',
          trigger: ['blur', 'change']
        }
      ],
      placeholder: '请选择工单状态',
      options: [
        { label: '已完成', value: 1 },
        { label: '未完成', value: 0 }
      ]
    },
    {
      field: 'put_amount',
      type: 'input',
      label: '投放数量',
      rules: [
        {
          required: true,
          message: '投放数量不能为空',
          trigger: 'blur'
        }
      ],
      placeholder: '请输入投放数量'
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {}
}
