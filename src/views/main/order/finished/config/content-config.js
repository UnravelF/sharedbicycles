export const contentTableConfig = {
  title: '已完成订单列表',
  handleTitle: '新建订单',
  propList: [
    { prop: 'id', label: 'ID' },
    { prop: 'bike_id', label: '设备id', minWidth: '100' },
    { prop: 'area', label: '关锁定位', minWidth: '150' },
    {
      prop: 'lock_time',
      label: '关锁时间',
      minWidth: '200',
      slotName: 'lock_time'
    },
    { prop: 'profit', label: '产生盈利', minWidth: '100', slotName: 'profit' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '200',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '200',
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
