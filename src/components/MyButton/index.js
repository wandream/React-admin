import React,{useState} from 'react'
import { Button, Space, Radio } from 'antd'
import './index.css'

const MyButton = () => {

  const [size, setSize] = useState('small')

  const handleChange = (e) => {
    console.log(e)
    setSize(e.target.value)
  }

  return (
    <div>
      <p>按钮类型</p>
      <Space>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Space>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>按钮尺寸</p>
      <Radio.Group value={size} onChange={handleChange}>
        <Radio.Button value="large">large</Radio.Button>
        <Radio.Button value="default">default</Radio.Button>
        <Radio.Button value="small">small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Space>
        <Button size={size} type="primary">Primary</Button>
        <Button size={size}>Default</Button>
        <Button size={size} type="dashed">Dashed</Button>
        <Button size={size} type="link">Link</Button>
        <Button size={size} type="primary">Primary</Button>
      </Space>
      <br />
      <br />
      <p>危险按钮</p>
      <Space>
        <Button danger type="primary">Primary Button</Button>
        <Button danger >Default Button</Button>
        <Button danger type="dashed">Dashed Button</Button>
        <Button danger type="text">Text Button</Button>
        <Button danger type="link">Link Button</Button>
      </Space>
    </div>
  )
}

export default MyButton