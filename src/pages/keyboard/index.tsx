import React, { useState, useRef } from 'react';
import { View } from '@tarojs/components'
import { Panel, Cell, Keyboard, KeyboardPicker, Button } from 'zarm'
import './index.scss'

function Demo() {

  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  const onKeyClick = (key) => {
    console.log(key);
    if (['close', 'ok'].indexOf(key) > -1) {
      toggle();
      return;
    }
    // do something...
  };

  return (
    <View>
      <Keyboard type="number" onKeyClick={(key) => console.log(key)} />
      <Panel
        title='基本用法'
      >
         <Cell
        description={
          <Button size="xs" onClick={toggle}>
            {visible ? '关闭' : '开启'}
          </Button>
        }
      >
        拾取器触发方式
      </Cell>
      <KeyboardPicker visible={visible} onKeyClick={onKeyClick} mountContainer={false} />
      </Panel>
    </View>
  )
}

export default Demo;
