const siteMap = {
  general: {
    title: '通用',
    components: [{
      key: 'Button',
      name: '按钮',
      page: '/pages/button/index'
    }]
  },
  view: {
    title: '数据展示',
    components: [
    // {
    //   key: 'Panel',
    //   name: '面板',
    //   page: '/pages/panel/index', 
    // },
    {
      key: 'Cell',
      name: '列表项',
      page: '/pages/cell/index', 
    },]
  },
  feedback: {
    title: '操作反馈',
    components: [
      {
        key: 'ActionSheet',
        name: '动作面板',
        page: '/pages/action-sheet/index', 
      },
    ]
  }
}

export default siteMap;