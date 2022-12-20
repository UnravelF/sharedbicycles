export const contentTableConfig = {
  title: '维修工单',
  handleTitle: '新建工单',
  propList: [
    { prop: 'id', label: 'ID', minWidth: '100' },
    { prop: 'area', label: '投放城市', minWidth: '100' },
    { prop: 'brand', label: '供应商', minWidth: '100' },
    { prop: 'amount', label: '维修数量', minWidth: '100' },
    {
      prop: 'apply_time',
      label: '申报时间',
      minWidth: '100',
      slotName: 'put_time'
    },
    { prop: 'status', label: '工单状态', minWidth: '100', slotName: 'status' },
    {
      label: '操作',
      minWidth: '130',
      slotName: 'handler'
    }
  ],
  showIndexColumn: false,
  showSelectColumn: true
}
