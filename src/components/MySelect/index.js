import React,{useState} from 'react'
import {Select, Space, Radio} from 'antd'
import MyCascader from './MyCascader.js'
import MyRadio from './MyRadio.js'
import './index.css'

const {Option} = Select

const MySelect = () => {

  const [value, setValue] = useState('')
  const [size, setSize] = useState('small')

  const handleChange = (e) => {
    console.log(e)
    setValue(e)
  }

  const handleChange2 = (e) => {
    console.log(e)
  }

  const handleSizeChange = (e) => {
    console.log(e)
    setSize(e.target.value)
  }

  const children = [];
  
  for(let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36)+i}>{i.toString(36)+i}</Option>)
  }

  return (
    <div>
      <p>基本使用</p>
      <Space>
      <Select defaultValue={value} style={{width: 120}} onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <span>{value}</span>
      </Space>
      <br />
      <br />
      <p>尺寸大小</p>
        <Radio.Group value={size} onChange={handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
      <br />
      <br />
      <Space>
        <Select size={size} defaultValue="a1" onChange={handleChange2} style={{ width: 200 }}>
          {children}
        </Select>
        <Select
          mode="multiple"
          size={size}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange2}
          style={{ width: 200 }}
        >
          {children}
        </Select>
        <Select
          mode="tags"
          size={size}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange2}
          style={{ width: 200 }}
        >
          {children}
        </Select>
      </Space>
      <br />
      <br />
      <p>级联选择</p>
      <MyCascader />
      <br /> 
      <p>单项选择</p>
      <MyRadio />
      
    </div>
  )
}

export default MySelect