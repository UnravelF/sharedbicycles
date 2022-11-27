export const contentTableConfig = {
  title: '供应商列表',
  handleTitle: '新建供应商',
  propList: [
    { prop: 'id', label: 'ID', minWidth: '100' },
    { prop: 'brand', label: '供应商', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '130',
      slotName: 'handler'
    }
  ],
  showIndexColumn: false,
  showSelectColumn: true
}
