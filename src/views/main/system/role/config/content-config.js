export const contentTableConfig = {
  title: '角色列表',
  handleTitle: '新建角色',
  // 自定义列表属性列参数
  propList: [
    { prop: 'id', label: 'ID', minWidth: '100' },
    { prop: 'rolename', label: '角色名称', minWidth: '100' },
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
