import React, { useState } from "react";
import { Table, Button } from "antd";
import "whatwg-fetch";
import "es6-promise";
// 引入api
import api from "../../services/api";

// 创建列表的组件
// const createList = (props) => {
//   return props.map((item) => {
//     return (
//       <li key={item.name}>
//         {item.name}
//         <br />
//         <b>{item.age}</b>
//       </li>
//     );
//   });
// };

// 异步请求组件
const MyAsync = () => {
  const [list, setList] = useState([]);
  const [apiList, setApilist] = useState([]);
  const [loading, setLoading] = useState(false);

  // 按钮点击事件
  const req = () => {
    fetch(
      "https://www.fastmock.site/mock/8a39218d5e115ef537c1f15cab71c234/react_project/api/getMydata",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      console.log(res, "---res");
      res.json().then((result) => {
        const { data } = result;
        console.log(data);
        setList(data.list);
      });
    });
  };

  const reqApi = () => {
    setLoading(true);
    api
      .getData()
      .then((res) => {
        console.log(res, "---resapi");
        return res.json();
      })
      .then((data) => {
        console.log(data, "---dataapi");
        setApilist(data?.data?.list);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
  ];

  return (
    <div>
      <h1>Async</h1>
      <Button onClick={req} type="primary">
        请求数据
      </Button>
      <Table dataSource={list} columns={columns}></Table>
      <Button onClick={reqApi} type="primary">
        请求数据
      </Button>
      <Table dataSource={apiList} columns={columns} loading={loading}></Table>
    </div>
  );
};

export default MyAsync;
