import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { List, Panel } from 'zarm'
import Taro from '@tarojs/taro';
import siteMap from '../../site';

import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {

    const renderDemo = () => {
      const keys = Object.keys(siteMap);
      return keys.map((key) => {
        return  (<Panel title={`${siteMap[key].title} (${siteMap[key].components.length})`} key={key}>
          <List>
            {
              siteMap[key].components.map((c) => {
                return (<List.Item hasArrow key={c.key} onClick={() => Taro.navigateTo({ url: c.page })} title={<View>{c.key}<Text className='zh'>{c.name}</Text></View>} />)
              })
            }
          </List>
          </Panel>)
      })
       
    }
    return (
      <View className='index'>
        <View className='brand'>
          <View className='brand-title'>Zarm</View>
          <View className='brand-description'>众安科技移动端组件库</View>
        </View>
        <View className='main'>
         {
           renderDemo()
         }
        </View>
      </View>
    )
  }
}
