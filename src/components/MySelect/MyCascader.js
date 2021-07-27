import React,{useState} from 'react'
import { Cascader } from 'antd'
import './index.css'

const MyCascader = () => {
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

 

  const [value, setValue] = useState(['null'])

  const handleChange = (e) => {
    console.log('cascader', e)
    setValue(e)
  }
  return (
    <div>
      <p>基本使用</p>
      <Cascader options={options} onChange={handleChange} placeholder="Please select" />
      <br />
      <br />
      <p>自定义显示</p>
      <span>
        {value.join('; ')}
        &nbsp;
        <Cascader options={options} onChange={handleChange}>
          {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
          <a href="#">Change city</a>
        </Cascader>
      </span>
    </div>
  )
}

export default MyCascader