import { View } from '@tarojs/components'
import { List, Panel } from 'zarm'
import './index.scss'

function Demo() {
 return (
  <View>
    <Panel
      title='基本用法'
    >
     <List> <List.Item title='标题文字' /></List>
    </Panel>

    <Panel
      title='带描述'
    >
      <List><List.Item title='标题文字' info='描述文字' /></List>
    </Panel>
  </View>
 )
}

export default Demo;
