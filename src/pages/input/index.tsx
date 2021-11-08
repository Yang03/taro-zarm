import React, { useState, useRef } from 'react';
import { View } from '@tarojs/components'
import { Panel, Cell, Input, Button } from 'zarm'
import './index.scss'

function Demo() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const focusInput = useRef();
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');

  return (
    <View>
      <Panel
        title='基本用法'
      >
        <Cell title='单行文本'>
          <Input
            clearable
            type='text'
            placeholder='请输入'
            value={title}
            onChange={(value) => {
              setTitle(value);
              console.log(`onChange: ${value}`);
            }}
            onBlur={(value) => console.log(`onBlur: ${value}`)}
          />
        </Cell>
        <Cell title='多行文本'>
          <Input
            rows={3}
            type='text'
            placeholder='请输入'
            value={content}
            onChange={setContent}
          />
        </Cell>
      </Panel>
      <Panel
        title='高度自适应'
      >
        <Cell title='多行文本'>
          <Input
            autoHeight
            type='text'
            rows={3}
            placeholder='请输入'
            value={value}
            onChange={setValue}
          />
        </Cell>
      </Panel>
      <Panel
        title='显示输入字数'
      >
        <Cell title='多行文本'>
          <Input
            autoHeight
            showLength
            maxLength={200}
            type="text"
            rows={3}
            placeholder="请输入"
            value={value1}
            onChange={setValue1}
          />
        </Cell>       
      </Panel>
   </View>
 )
}

export default Demo;
