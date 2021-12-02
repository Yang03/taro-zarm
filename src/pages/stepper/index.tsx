import React, { useState, useRef } from 'react';
import { View } from '@tarojs/components'
import { Panel, Cell, Stepper } from 'zarm'
import './index.scss'

function Demo() {

  const [value, setValue] = useState<any>();

  return (
    <View>
      <Panel
        title='基本用法'
      >
        <Cell
          title="普通"
          description={
            <Stepper
              value={value}
              onChange={setValue}
              onInputChange={(value) => {
                console.log('onInputChange:', value);
              }}
            />
          }
        />

        <Cell title="设置默认值" description={<Stepper defaultValue={2} />} />

        <Cell title="设置上下限（-3 ~ 3）" description={<Stepper min={-3} max={3} />} />

        <Cell title="设置步长" description={<Stepper step={5} />} />

        <Cell
          title="步长小数"
          description={<Stepper type="price" step={0.12} defaultValue={0.9} max={2.0} min={1} />}
        />

        <Cell title="禁用状态" description={<Stepper disabled />} />
        <Cell title="禁用输入" description={<Stepper disableInput />} />
      </Panel>
    </View>
  )
}

export default Demo;
