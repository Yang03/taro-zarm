import React, { useState, useRef } from 'react';
import { View } from '@tarojs/components'
import { Panel, List, Checkbox } from 'zarm'
import './index.scss'

function Demo() {

  const [value, setValue] = useState([]);

  const onCheckedAll = (e) => {
    setValue(e.target.checked ? ['0', '1', '2'] : []);
  };

  return (
    <View>
      <Panel
        title='基本用法'
      >

      <List>
        <List.Item hasArrow title="Item 1" onClick={() => {}} />
        <List.Item hasArrow title="Item 2" onClick={() => {}} />
        <List.Item hasArrow title="Item 3" onClick={() => {}} />
      </List>

       <List>
           <List.Item hasArrow onClick={() => {}}>
           Item 1
           </List.Item>
          <List.Item hasArrow>
            <Checkbox defaultChecked>默认选中</Checkbox>
          </List.Item>
          <List.Item>
            <Checkbox disabled>禁用</Checkbox>
          </List.Item>
          <List.Item>
            <Checkbox defaultChecked disabled>
              选中且禁用
            </Checkbox>
          </List.Item>
       </List>
      </Panel>
      <Panel
        title='组合使用'
      >
         <List>
          <List.Item>
            <Checkbox
              checked={value.length === 3}
              indeterminate={value.length < 3 && value.length > 0}
              onChange={onCheckedAll}
            >
              全选 / 反选
            </Checkbox>
          </List.Item>
          <List.Item>
            <Checkbox.Group value={value} onChange={setValue}>
              <Checkbox value="0">选项一</Checkbox>
              <Checkbox value="1">选项二</Checkbox>
              <Checkbox value="2">选项三</Checkbox>
            </Checkbox.Group>
          </List.Item>
        </List>
      </Panel>
      <Panel
        title='按钮样式'
      >
        <List>
          <List.Item
            title="普通"
            after={
              <Checkbox.Group
                type="button"
                value={value}
                onChange={(value) => {
                  setValue(value);
                  console.log(`checked to ${value}`);
                }}
              >
                <Checkbox value="0">选项一</Checkbox>
                <Checkbox value="1">选项二</Checkbox>
                <Checkbox value="2">选项三</Checkbox>
              </Checkbox.Group>
          }
        >
          
        </List.Item>

        <List.Item
          title="指定默认值"
          after={
            <Checkbox.Group type="button" defaultValue={['0', '1']}>
              <Checkbox value="0">选项一</Checkbox>
              <Checkbox value="1">选项二</Checkbox>
              <Checkbox value="2">选项三</Checkbox>
            </Checkbox.Group>
          }
        >
        </List.Item>
       

      <List.Item
        title="禁用指定项"
        after={
          <Checkbox.Group type="button">
            <Checkbox value="0">选项一</Checkbox>
            <Checkbox value="1" disabled>
              选项二
            </Checkbox>
            <Checkbox value="2" disabled checked>
              选项三
            </Checkbox>
          </Checkbox.Group>
        }
      >
       
      </List.Item>

      <List.Item
        title="直角"
        after={
          <Checkbox.Group type="button" shape="rect">
            <Checkbox value="0">选项一</Checkbox>
            <Checkbox value="1">选项二</Checkbox>
            <Checkbox value="2">选项三</Checkbox>
          </Checkbox.Group>
        }
      >
       
      </List.Item>

      <List.Item
        title="椭圆角"
        after={
          <Checkbox.Group type="button" shape="round">
            <Checkbox value="0">选项一</Checkbox>
            <Checkbox value="1">选项二</Checkbox>
            <Checkbox value="2">选项三</Checkbox>
          </Checkbox.Group>
        }
      >
      </List.Item>

      <List.Item
        title="幽灵按钮"
        after={
          <Checkbox.Group ghost type="button" defaultValue={['2']}>
            <Checkbox value="0">选项一</Checkbox>
            <Checkbox value="1">选项二</Checkbox>
            <Checkbox value="2" disabled>
              选项三
            </Checkbox>
          </Checkbox.Group>
        }
      >
       
      </List.Item>
      </List>
        </Panel>
      <Panel
        title='块级样式'
      >
        <List>
          <List.Item>
            <Checkbox.Group block type="button">
              <Checkbox value="0">选项一</Checkbox>
              <Checkbox value="1">选项二</Checkbox>
              <Checkbox value="2">选项三</Checkbox>
            </Checkbox.Group>
          </List.Item>
        </List>
      </Panel>
      <Panel
        title='列表样式'
      >
        <Checkbox.Group type="list" istMarkerAlign="after">
          <Checkbox value="0">选项一</Checkbox>
          <Checkbox value="1">选项二</Checkbox>
          <Checkbox value="2" disabled>
            选项三（禁止选择）
          </Checkbox>
        </Checkbox.Group>
      </Panel>
    </View>
  )
}

export default Demo;
