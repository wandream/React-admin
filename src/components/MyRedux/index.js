import React, { useState } from "react";
import { Button, Input, Space, Card } from "antd";
import store from "../../store/index";
import "../../assets/css/myredux.css";
// eslint-disable-next-line no-unused-vars
import {
  addAction,
  subAction,
  addTodo,
  deleteTodo,
  completeTodo,
} from "../../store/actionCreator";
const MyRedux = () => {
  const storeState = store.getState();
  const [number, setNumber] = useState(storeState.counter);
  const [list, setList] = useState([...storeState.list]);
  const [inputValue, setInputValue] = useState("");
  const [tips, setTips] = useState("");

  // +2
  const addNum = () => {
    const action = addAction(2);
    store.dispatch(action);
    setNumber(store.getState().counter);
  };

  // -3
  const subNum = () => {
    const action = subAction(3);
    store.dispatch(action);
    setNumber(store.getState().counter);
  };

  // 添加代办事项
  const addTo = () => {
    setTips("");
    const addTodoAction = addTodo({ content: inputValue, done: false });
    store.dispatch(addTodoAction);
    setInputValue("");
    setList(store.getState().list);
  };

  // 输入代办事项
  const onInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const onDelete = (val) => {
    const deleteTodoAction = deleteTodo(val);
    store.dispatch(deleteTodoAction);
    setList(store.getState().list);
  };

  const onComplete = (val) => {
    const completeTodoAction = completeTodo(val);
    store.dispatch(completeTodoAction);
    setList(store.getState().list);
  };

  return (
    <div>
      <Card title="简单加减">
        <p>{number}</p>
        <Button onClick={addNum}>+</Button>
        <Button onClick={subNum}>-</Button>
      </Card>
      <br />
      <Card title="TodoList">
        <Input
          className="todo-input"
          value={inputValue}
          onChange={onInputValue}
        />
        <Button onClick={addTo} type="primary">
          ADD
        </Button>
        <p>{tips}</p>
        <ul className="todo-list">
          {list.map((items, index) => {
            return (
              <li className="todo-item" key={index}>
                <span
                  style={{
                    textDecoration: items.done ? "line-through" : "none",
                    marginBottom: "0px",
                    display: "inline-block",
                    width: "800px",
                  }}
                >
                  {items.content}
                </span>
                <Space>
                  <Button type="primary" onClick={() => onDelete(index)}>
                    删除
                  </Button>
                  <Button onClick={() => onComplete(index)}>完成</Button>
                </Space>
              </li>
            );
          })}
        </ul>
      </Card>
    </div>
  );
};

export default MyRedux;
