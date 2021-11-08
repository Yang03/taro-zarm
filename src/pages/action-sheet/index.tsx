import { useState } from 'react';
import { ActionSheet, Cell, Button } from 'zarm';

const BUTTONS = [
  {
    text: '操作一',
    onClick: () => console.log('点击操作一'),
  },
  {
    theme: 'primary',
    text: '操作二',
    onClick: () => console.log('点击操作二'),
  },
  {
    theme: 'danger',
    text: '操作三',
    onClick: () => console.log('点击操作三'),
  },
];

const Demo = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  console.log(visible1)

  return (
    <>
      <Cell
        description={
          <Button size='xs' onClick={() => setVisible1(true)}>
            开启
          </Button>
        }
      >
        普通
      </Cell>
      <Cell
        description={
          <Button size='xs' onClick={() => setVisible2(true)}>
            开启
          </Button>
        }
      >
        带取消操作
      </Cell>
      <Cell
        description={
          <Button size='xs' onClick={() => setVisible3(true)}>
            开启
          </Button>
        }
      >
        圆角、留边
      </Cell>

      <ActionSheet
        visible={visible1}
        actions={BUTTONS}
        mountContainer={false}
        onMaskClick={() => setVisible1(!visible1)}
      />
      <ActionSheet
        visible={visible2}
        actions={BUTTONS}
        mountContainer={false}
        onMaskClick={() => setVisible2(!visible2)}
        onCancel={() => setVisible2(!visible2)}
      />
      <ActionSheet
        spacing
        visible={visible3}
        mountContainer={false}
        actions={BUTTONS}
        onMaskClick={() => setVisible3(!visible3)}
        onCancel={() => setVisible3(!visible3)}
      />
    </>
  );
}

export default Demo;