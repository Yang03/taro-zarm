// const siteMap = {
//   general: {
//     title: '通用',
//     components: [{
//       key: 'Button',
//       name: '按钮',
//       page: '/pages/button/index'
//     }]
//   },
//   view: {
//     title: '数据展示',
//     components: [
//     // {
//     //   key: 'Panel',
//     //   name: '面板',
//     //   page: '/pages/panel/index', 
//     // },
//     {
//       key: 'Cell',
//       name: '列表项',
//       page: '/pages/cell/index', 
//     },]
//   },
//   feedback: {
//     title: '操作反馈',
//     components: [
//       {
//         key: 'ActionSheet',
//         name: '动作面板',
//         page: '/pages/action-sheet/index', 
//       },
//       {
//         key: 'Popup',
//         name: '动作面板',
//         page: '/pages/popup/index', 
//       },
//     ]
//   },
//   test: {
//     title: '测试',
//     components: [
//       {
//         key: 'react spring',
//         name: '动画',
//         page: '/pages/test/index', 
//       },
//     ]
//   }
  
// }

// const pages = [];

// Object.keys(siteMap).forEach((s) => {
//   siteMap[s].components?.forEach((c) => {

//    pages.push(c.page.replace(/\//, ''))
//   })
// })

// console.log(pages);

export default {
  pages: [
    'pages/index/index',
    'pages/button/index',
    'pages/cell/index',
    'pages/action-sheet/index',
    'pages/popup/index',
    'pages/badge/index',
    'pages/test/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
