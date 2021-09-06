import { View } from '@tarojs/components'
import { Cell, Panel } from 'zarm'
import './index.scss'

function CellDemo() {
 return (
  <View>
    <Panel
      title='基本用法'
    >
      <Cell title='标题文字'></Cell>
    </Panel>

    <Panel
      title='带描述'
    >
      <Cell title='标题文字' description='描述文字'></Cell>
    </Panel>
  </View>
 )
}

export default CellDemo;
