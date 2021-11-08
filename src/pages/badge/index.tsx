import { View } from '@tarojs/components'
import { Panel, Cell, Badge } from 'zarm'
import './index.scss'

function Demo() {
 return (
  <View>
    <Panel
      title='基本用法'
    >
      <Cell hasArrow title='点状' description={<Badge />} onClick={() => {}} />
      <Cell
        hasArrow
        title='直角'
        description={<Badge shape='rect' text='免费' />}
        onClick={() => {}}
      />
      <Cell
        hasArrow
        title='圆角'
        description={<Badge shape='radius' text='new' />}
        onClick={() => {}}
      />
      <Cell
        hasArrow
        title='椭圆角'
        description={<Badge shape='round' text='999+' />}
        onClick={() => {}}
      />
      <Cell
        hasArrow
        title='圆形'
        description={<Badge shape='circle' text={3} />}
        onClick={() => {}}
      />
      <Cell
        hasArrow
        title='叶形'
        description={<Badge shape='leaf' text='新品' />}
        onClick={() => {}}
      />
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
