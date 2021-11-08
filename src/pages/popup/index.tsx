import { useReducer, useState } from 'react';
import { Popup, Cell, Button } from 'zarm';

import './index.scss'; 

const initVisibleState = {
  popBottom: false,
  popTop: false,
  popLeft: false,
  popRight: false,
  picker: false,
  popSpec: false,
  popCenterSpec: false,
};

const Demo = () => {
  const [visible, setVisible] = useReducer((state, action) => {
    const { type } = action;
    return {
      ...state,
      [type]: !state[type],
    };
  }, initVisibleState);

  const toggle = (type) => setVisible({ type });

  console.log(visible);

  return (
    <>
      <Cell
        description={
          <Button
            size='xs'
            onClick={() => {
              toggle('popTop');
              console.log('popTop')
              setTimeout(() => {
                toggle('popTop');
              }, 3000);
            }}
          >
            开启
          </Button>
        }
      >
        从上方弹出
      </Cell>

      <Cell
        description={
          <Button size='xs' onClick={() => {
            console.log('popBottom')
            toggle('popBottom');
          }}
          >
            开启
          </Button>
        }
      >
        从下方弹出
      </Cell>

      <Cell
        description={
          <Button size='xs' onClick={() => {
            console.log('popLeft')
            toggle('popLeft');
          }}
          >
            开启1
          </Button>
        }
      >
        从左侧弹出
      </Cell>

      <Cell
        description={
          <Button size='xs' onClick={() => {
            console.log('popRight')
            toggle('popRight');
          }}>
            开启3
          </Button>
        }
      >
        从右侧弹出
      </Cell>

      <Cell
        description={
          <Button size='xs' onClick={() => {
            console.log('popCenter')
            toggle('popCenter');
          }}>
            开启4
          </Button>
        }
      >
        从中间弹出
      </Cell>


      <Popup
        visible={visible.popTop}
        direction='top'
        mask={false}
        afterClose={() => console.log('关闭')}
        mountContainer={false}
        destroy
      >
        <div className='popup-box-top'>更新成功</div>
      </Popup>

      <Popup
        visible={visible.popBottom}
        direction='bottom'
        onMaskClick={() => toggle('popBottom')}
        afterOpen={() => console.log('打开')}
        afterClose={() => console.log('关闭')}
        destroy
        mountContainer={false}
      >
        <div className='popup-box'>
          底部打开
        </div>
      </Popup>

      {/* <Picker
        visible={visible.picker}
        value={value}
        dataSource={SINGLE_DATA}
        onOk={(selected) => {
          console.log('Picker onOk: ', selected);
          setValue(selected.map((item) => item.value));
          toggle('picker');
        }}
        onCancel={() => toggle('picker')}
      /> */}

      <Popup
        visible={visible.popLeft}
        onMaskClick={() => toggle('popLeft')}
        direction='left'
        afterClose={() => console.log('关闭')}
        mountContainer={false}
        destroy
      >
        <div className='popup-box-left'>
          <Button size='xs' onClick={() => toggle('popLeft')}>
            关闭弹层
          </Button>
        </div>
      </Popup>

      <Popup
        visible={visible.popRight}
        onMaskClick={() => toggle('popRight')}
        direction='right'
        afterClose={() => console.log('关闭')}
        mountContainer={false}
        destroy
      >
        <div className='popup-box-right'>
          <Button size='xs' onClick={() => toggle('popRight')}>
            关闭弹层
          </Button>
        </div>
      </Popup>

      <Popup
        visible={visible.popCenter}
        direction='center'
        width='70%'
        afterClose={() => console.log('关闭')}
        mountContainer={false}
        destroy
      >
        <div className='popup-box'>
          <Button size='xs' onClick={() => toggle('popCenter')}>
            关闭弹层
          </Button>
        </div>
      </Popup>

      {/* <Popup
        visible={visible.popCenterSpec}
        direction='center'
        width='70%'
        afterClose={() => console.log('关闭')}
        onEsc={() => {
          toggle('popCenterSpec');
        }}
        mountContainer={() => {
          return popupRef?.current?.portalRef?.popup;
        }}
      >
        <div className='popup-box'>
          <Button size='xs' onClick={() => toggle('popCenterSpec')}>
            关闭弹层
          </Button>
        </div>
      </Popup> */}

    </>
  );
};


export default Demo;