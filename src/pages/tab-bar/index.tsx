import { useState } from 'react'
import { View } from '@tarojs/components'
import { Panel, Cell, TabBar, Button } from 'zarm'
import './index.scss'

const icon = {
  home: 'https://cdn-health.zhongan.com/magiccube/resource/s/TIHewfM5SG.png',
  homeActive: 'https://cdn-health.zhongan.com/magiccube/resource/s/wWGsrEBPdA.png',
  insure: 'https://cdn-health.zhongan.com/magiccube/resource/s/ttk0jJja98.png',
  insureActive: 'https://cdn-health.zhongan.com/magiccube/resource/s/gFfAxE8tbo.png',
}

function TabIcon(props) {
  const { type } = props
  return <div className='tab-icon'>
    <img src={icon[type]} />
  </div>
}

function Demo() {
  const [activeKey, setActiveKey] = useState('home');
  const [visible, setVisible] = useState(true);
 return (
  <View>
    <Panel
      title='基本用法'
    >
      <Cell
        description={
          <Button
            size='xs'
            onClick={() => {
              setVisible(!visible);
            }}
          >
            {visible ? '隐藏' : '展示'}
          </Button>
        }
      >
        隐藏 | 展示
      </Cell>

      <TabBar visible={visible} activeKey={activeKey} onChange={setActiveKey}>
        <TabBar.Item itemKey='home' title='主页' icon={<TabIcon type='home' />} activeIcon={<TabIcon type='homeActive' />} />
        <TabBar.Item
          itemKey='insure'
          title='保险'
          icon={<TabIcon type='insure' />} activeIcon={<TabIcon type='insureActive' />}
          badge={{ shape: 'dot' }}
        />
      </TabBar>
    </Panel>
    
  </View>
 )
}

export default Demo;
