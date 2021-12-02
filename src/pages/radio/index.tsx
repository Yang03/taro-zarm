import React, { useState, useRef } from 'react';
import { View } from '@tarojs/components'
import { Panel, Cell, Radio } from 'zarm'
import './index.scss'

function Demo() {

  const [value, setValue] = useState<any>();

  return (
    <View>
      <Panel
        title='基本用法'
      >
        <Cell>
          <Radio>普通</Radio>
        </Cell>
        <Cell>
          <Radio defaultChecked>默认选中</Radio>
        </Cell>
        <Cell>
          <Radio disabled>禁用</Radio>
        </Cell>
        <Cell>
          <Radio defaultChecked disabled>
            选中且禁用
          </Radio>
        </Cell>
      </Panel>
      <Panel
        title='组合使用'
      >
        <Cell>
          <Radio.Group>
            <Radio value="0">选项一</Radio>
            <Radio value="1">选项二</Radio>
            <Radio value="2">选项三</Radio>
          </Radio.Group>
        </Cell>
      </Panel>
      <Panel
        title='按钮样式'
      >
        <Cell
          description={
            <Radio.Group
              type="button"
              value={value}
              onChange={(value) => {
                setValue(value);
                console.log(`radio to ${value}`);
              }}
            >
              <Radio value="0">选项一</Radio>
              <Radio value="1">选项二</Radio>
              <Radio value="2">选项三</Radio>
            </Radio.Group>
          }
        >
          普通
      </Cell>

        <Cell
          description={
            <Radio.Group type="button" defaultValue="1">
              <Radio value="0">选项一</Radio>
              <Radio value="1">选项二</Radio>
              <Radio value="2">选项三</Radio>
            </Radio.Group>
          }
        >
          指定默认值
      </Cell>

        <Cell
          description={
            <Radio.Group type="button">
              <Radio value="0">选项一</Radio>
              <Radio value="1" disabled>
                选项二
            </Radio>
              <Radio value="2" disabled checked>
                选项三
            </Radio>
            </Radio.Group>
          }
        >
          禁用指定项
      </Cell>

        <Cell
          description={
            <Radio.Group type="button" shape="rect">
              <Radio value="0">选项一</Radio>
              <Radio value="1">选项二</Radio>
              <Radio value="2">选项三</Radio>
            </Radio.Group>
          }
        >
          直角
      </Cell>

        <Cell
          description={
            <Radio.Group type="button" shape="round">
              <Radio value="0">选项一</Radio>
              <Radio value="1">选项二</Radio>
              <Radio value="2">选项三</Radio>
            </Radio.Group>
          }
        >
          椭圆角
      </Cell>

        <Cell
          description={
            <Radio.Group compact type="button" defaultValue="0">
              <Radio value="0">选项一</Radio>
              <Radio value="1">选项二</Radio>
              <Radio value="2">选项三</Radio>
            </Radio.Group>
          }
        >
          紧凑模式
      </Cell>

        <Cell
          description={
            <Radio.Group compact ghost type="button" defaultValue="0">
              <Radio value="0">选项一</Radio>
              <Radio value="1">选项二</Radio>
              <Radio value="2">选项三</Radio>
            </Radio.Group>
          }
        >
          幽灵按钮
      </Cell>
      </Panel>
      <Panel
        title='块级样式'
      >
        <Cell>
          <Radio.Group block type="button">
            <Radio value="0">选项一</Radio>
            <Radio value="1">选项二</Radio>
            <Radio value="2">选项三</Radio>
          </Radio.Group>
        </Cell>
      </Panel>
      <Panel
        title='列表样式'
      >
        <Radio.Group type="cell">
          <Radio value="0">选项一</Radio>
          <Radio value="1">选项二</Radio>
          <Radio value="2" disabled>
            选项三（禁止选择）
          </Radio>
        </Radio.Group>
      </Panel>
    </View>
  )
}

export default Demo;
