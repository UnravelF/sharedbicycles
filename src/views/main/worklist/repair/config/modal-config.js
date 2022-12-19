export const modalConfig = {
  formItems: [
    {
      field: 'area',
      type: 'select',
      label: '申报城市',
      placeholder: '请选择城市名称',
      options: [],
      rules: [
        {
          required: true,
          message: '请选择城市',
          trigger: 'change'
        }
      ]
      // isHidden: true
    },
    {
      field: 'brand',
      type: 'select',
      label: '品牌',
      placeholder: '请选择品牌名称',
      options: [],
      rules: [
        {
          required: true,
          message: '请选择品牌',
          trigger: 'change'
        }
      ]
    },
    {
      field: 'status',
      type: 'select',
      label: '工单状态',
      placeholder: '请选择工单状态',
      options: [
        { label: '已完成', value: 1 },
        { label: '未完成', value: 0 }
      ],
      rules: [
        {
          required: true,
          message: '请设置工单状态',
          trigger: 'blur'
        }
      ]
    },
    {
      field: 'amount',
      type: 'input',
      label: '维修数量',
      placeholder: '请输入维修数量',
      rules: [
        {
          required: true,
          message: '维修数量不能为空',
          trigger: 'blur'
        },
        {
          pattern: /^[3-9][0-9]{1,}$/,
          message: '申报数量至少要30以上~',
          trigger: 'blur'
        }
      ]
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {}
}
