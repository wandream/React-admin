import React, { useState } from "react";
import Child from "./Child";
// import Grandson from "./Grandson";
//
const ThemeContext = React.createContext("1234567");
const MyPassByValue = () => {
  const [value, setValue] = useState("");
  const onBack = (msg) => {
    console.log(msg);
    setValue(msg);
  };
  return (
    <div>
      <h1 style={{ color: "red", fontSize: "30px", fontWeight: "bold" }}>
        父子组件传值：使用props
      </h1>
      <div className="parents">
        父组件
        <br />
        text的值为 11
        <br />
        点击子组件传过来的值为：{value}
        <ThemeContext.Provider value={"123123"}>
          <Child text="11" onCallback={onBack} />
        </ThemeContext.Provider>
      </div>
      <h1 style={{ color: "red", fontSize: "30px", fontWeight: "bold" }}>
        使用Context进行组件间传值
      </h1>
      <div>{/* <Grandson /> */}</div>
    </div>
  );
};

export default MyPassByValue;
