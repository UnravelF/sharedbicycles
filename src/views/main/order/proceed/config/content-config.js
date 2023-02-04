export const contentTableConfig = {
  title: '进行中订单列表',
  handleTitle: '新建订单',
  propList: [
    { prop: 'id', label: 'ID' },
    { prop: 'bike_id', label: '设备id', minWidth: '100' },
    { prop: 'area', label: '开锁定位', minWidth: '150' },
    {
      prop: 'unlock_time',
      label: '开锁时间',
      minWidth: '150',
      slotName: 'unlock_time'
    },
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
