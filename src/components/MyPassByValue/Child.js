import React, { useState } from "react";
import "../../assets/css/mypassbyvalue.css";

const Child = (props) => {
  const [inputValue, setInputValue] = useState();
  const handleClick = () => {
    return () => {
      props.onCallback(inputValue);
    };
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="child">
      <h1>子组件</h1>
      <p>父组件中的text的值为{props.text}</p>
      <input value={inputValue} onChange={handleInput} />
      <button onClick={handleClick()}>传给父组件</button>
    </div>
  );
};

export default Child;
