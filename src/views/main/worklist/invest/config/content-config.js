export const contentTableConfig = {
  title: '投放工单',
  handleTitle: '新建工单',
  propList: [
    { prop: 'id', label: 'ID', minWidth: '100' },
    { prop: 'area', label: '投放城市', minWidth: '100' },
    { prop: 'brand', label: '供应商', minWidth: '100' },
    { prop: 'put_amount', label: '投放数量', minWidth: '100' },
    {
      prop: 'put_time',
      label: '投放时间',
      minWidth: '100',
      slotName: 'put_time'
    },
    { prop: 'status', label: '工单状态', minWidth: '100' },
    {
      label: '操作',
      minWidth: '130',
      slotName: 'handler'
    }
  ],
  showIndexColumn: false,
  showSelectColumn: true
}
