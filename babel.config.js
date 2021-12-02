// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md

module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true
    }]
  ],
  // plugins: [['import', {
  //   libraryName: 'zarm',
  //   customName: (name) => {
  //     return `zarm/lib/${name}/index.js`;
  //   },
  //   customStyleName: (name) => {
  //     return `zarm/lib/${name}/style/index.taro.js`;
  //   }
  // }]]
  plugins: [['import', {
    libraryName: 'zarm',
    // style: true,
    customName: (name) => {
      return `zarm/lib/${name}/index.js`;
    },
    customStyleName: (name) => {
      return `zarm/lib/${name}/style/index.js`;
    }
    // style: (name) => {
    //   console.log(name)
    //   return name;
    // }
  }]]
}