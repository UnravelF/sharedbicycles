export const searchFormConfig = {
  labelWidth: '120px',
  headerTitle: '投放工单查询',

  itemStyle: {
    padding: '10px 40px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      field: 'area',
      type: 'select',
      label: '投放城市',
      rules: [],
      placeholder: '请选择城市名称',
      options: [
        { label: '广州市天河区科韵路', value: '广州市天河区科韵路' },
        { label: '广州市天河区棠安路', value: '广州市天河区棠安路' },
        { label: '广州市天河区长兴路', value: '广州市天河区长兴路' },
        { label: '广州市天河区龙洞路', value: '广州市天河区龙洞路' },
        { label: '广州市天河区棠下路', value: '广州市天河区棠下路' }
      ]
    },
    {
      field: 'brand',
      type: 'select',
      label: '品牌',
      rules: [],
      placeholder: '请选择品牌名称',
      options: [
        { label: '滴滴', value: '滴滴' },
        { label: '美团', value: '美团' },
        { label: '青桔', value: '青桔' }
      ]
    },
    {
      field: 'status',
      type: 'select',
      label: '工单状态',
      rules: [],
      placeholder: '请选择工单状态',
      options: [
        { label: '已完成', value: 1 },
        { label: '未完成', value: 0 }
      ]
    }
  ]
}
