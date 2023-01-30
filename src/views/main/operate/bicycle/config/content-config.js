export const contentTableConfig = {
  title: '设备列表',
  handleTitle: '新建单车设备',
  propList: [
    { prop: 'id', label: 'ID' },
    { prop: 'bike_id', label: '设备id', minWidth: '100' },
    { prop: 'brand', label: '品牌' },
    { prop: 'area', label: '点位', minWidth: '150' },
    { prop: 'lock_status', label: '开锁状态', slotName: 'lock_status' },
    { prop: 'break_status', label: '损坏状态', slotName: 'break_status' },
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
