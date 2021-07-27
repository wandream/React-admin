import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import api from "../services/api";
import "../assets/css/mylogin.css";

const Login = () => {
  let history = useHistory();

  const handleSubmit = () => {
    // eslint-disable-next-line no-undef
    // console.log(value);
    api.Login().then((res) => {
      res.json().then((data) => {
        console.log(data.code);
        if (data.code === "0000") {
          console.log("11111111111111");
          history.push("/components");
        }
      });
    });
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="login">
      <h1 className="login-title">登录</h1>
      <div className="container">
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 18 }}>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
