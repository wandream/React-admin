import React from "react";

const TodoList = (props) => {
  return (
    <li key={props.key}>
      {props.text}
      <button onClick={props.onDelete}>delete</button>
    </li>
  );
};

export default TodoList;
