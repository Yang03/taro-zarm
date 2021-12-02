const siteMap = {
  general: {
    title: '通用',
    components: [{
      key: 'Button',
      name: '按钮',
      page: '/pages/button/index'
    }]
  },
  input: {
    title: '数据录入',
    components: [
      {
        key: 'Checkbox',
        name: '复选框',
        page: '/pages/checkbox/index',
      },
      {
        key: 'Input',
        name: '输入框',
        page: '/pages/input/index', 
      },
      {
        key: 'Keyboard',
        name: '键盘',
        page: '/pages/keyboard/index', 
      },
      {
        key: 'Radio',
        name: '复选框',
        page: '/pages/radio/index',
      },
      {
        key: 'Stepper',
        name: '步进器',
        page: '/pages/stepper/index', 
      },
    ]
  },
  view: {
    title: '数据展示',
    components: [
      
      {
        key: 'badge',
        name: '徽标',
        page: '/pages/badge/index', 
      },
      {
        key: 'List',
        name: '列表项',
        page: '/pages/list/index', 
      },
      
    ]
  },
  feedback: {
    title: '操作反馈',
    components: [
      {
        key: 'ActionSheet',
        name: '动作面板',
        page: '/pages/action-sheet/index', 
      },
      {
        key: 'Popup',
        name: '动作面板',
        page: '/pages/popup/index', 
      },
    ]
  },
  navigation: {
    title: '导航',
    components: [
      {
        key: 'TabBar',
        name: '标签栏',
        page: '/pages/tab-bar/index', 
      },
    ]
  },
  test: {
    title: '动画',
    components: [
      {
        key: 'react spring',
        name: '动画',
        page: '/pages/test/index', 
      },
    ]
  }
  
}

export default siteMap