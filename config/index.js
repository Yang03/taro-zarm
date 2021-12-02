import { resolve as _resolve } from 'path'
// import constparse from 
const config = {
  projectName: 'taro-antd',
  date: '2021-3-31',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    ['@tarojs/plugin-html', {
      pxtransformBlackList: [/am-/, /demo-/, /^body/]
    }],
    
  ],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    alias: {
      react: _resolve('./node_modules/react')
    },
    miniCssExtractPluginOption: {
      ignoreOrder: true
    },
    postcss: {
      pxtransform: {
        enable: true
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      },
      'postcss-transform-selector': {
        enable: true,
        config: {
          selector: ':root, page',
          transform: (decl) => {
            var oldValue = decl.value
            const val = oldValue.replace(/(\d*\.?\d+)(rpx)/g, (match, value, unit) => {
              return parseInt(value, 10) * 2 + unit;
            })
    
            decl.value = val;
          }
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
