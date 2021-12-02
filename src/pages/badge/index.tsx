import { View } from '@tarojs/components'
import { Panel, List, Badge } from 'zarm'
import './index.scss'

function Demo() {
 return (
  <View>
    <Panel
      title='基本用法'
    >
      <List>
        <List.Item hasArrow title='点状' info={<Badge />} onClick={() => {}} />
        <List.Item
          hasArrow
          title='直角'
          info={<Badge shape='rect' text='免费' />}
          onClick={() => {}}
        />
        <List.Item
          hasArrow
          title='圆角'
          info={<Badge shape='radius' text='new' />}
          onClick={() => {}}
        />
        <List.Item
          hasArrow
          title='椭圆角'
          info={<Badge shape='round' text='999+' />}
          onClick={() => {}}
        />
        <List.Item
          hasArrow
          title='圆形'
          info={<Badge shape='circle' text={3} />}
          onClick={() => {}}
        />
        <List.Item
          hasArrow
          title='叶形'
          info={<Badge shape='leaf' text='新品' />}
          onClick={() => {}}
        />
      </List>
    </Panel>
    <Panel title='多主题'>
      <div className='custom-panel'>
        <div className='box'>
          <Badge theme='primary' />
        </div>
        <div className='box'>
          <Badge theme='success' />
        </div>
        <div className='box'>
          <Badge theme='warning' />
        </div>
        <div className='box'>
          <Badge theme='danger' />
        </div>
        <div className='box'>
          <Badge shape='round' text='999+' theme='primary' />
        </div>
        <div className='box'>
          <Badge shape='round' text='999+' theme='success' />
        </div>
        <div className='box'>
          <Badge shape='round' text='999+' theme='warning' />
        </div>
        <div className='box'>
          <Badge shape='round' text='999+' theme='danger' />
        </div>
      </div>
    </Panel>

    <Panel title='上标位置'>
      <div className='custom-panel'>
        <div className='box'>
          <Badge shape='dot'>
            <div className='box-item' />
          </Badge>
        </div>
        <div className='box'>
          <Badge shape='rect' text='免费'>
            <div className='box-item' />
          </Badge>
        </div>
        <div className='box'>
          <Badge shape='radius' text='new'>
            <div className='box-item' />
          </Badge>
        </div>
        <div className='box'>
          <Badge shape='round' text='999+'>
            <div className='box-item' />
          </Badge>
        </div>
        <div className='box'>
          <Badge shape='circle' text='3'>
            <div className='box-item' />
          </Badge>
        </div>
        <div className='box'>
          <Badge shape='leaf' text='新品'>
            <div className='box-item' />
          </Badge>
        </div>
      </div>
    </Panel>

    <Panel title='文字'>
      <div className='text-panel'>
        <div className='box'>
          <Badge shape='dot'>
            <span className='box-text'>邀请有奖</span>
          </Badge>
        </div>
        <div className='box'>
          <span className='box-text'>邀请有奖</span>
          <Badge shape='dot' />
        </div>
    </div>
    </Panel>
    
  </View>
 )
}

export default Demo;
