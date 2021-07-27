import React from "react";

// 类组件
class MyClass extends React.Component {
  // 构造函数
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    // state(状态)：组件内部要使用的数据称之为状态
    // es7的写法
    // this.state = {
    //   list: [1,2,3]
    // }
    this.handleAdd = this.handleAdd.bind(this);
  }
  state = {
    list: [1, 2, 3],
    inputVal: "",
    count: 3,
  };

  handleChange(e) {
    // console.log(e.target.value);
    this.setState({
      inputVal: e.target.value,
    });
  }

  handleAdd() {
    if (this.state.inputVal) {
      this.setState({
        list: [...this.state.list, this.state.inputVal],
        inputVal: "",
      });
      this.setState({
        count: this.state.count + 1,
      });
      this.setState({
        count: this.state.count + 2,
      });
      this.setState({
        count: this.state.count + 3,
      });
    }
  }

  handleDelete(index) {
    let newList = [...this.state.list];
    newList.splice(index, 1);
    if (!this.state.inputVal) {
      this.setState({
        list: [...newList],
      });
    }
  }

  // 类组件一定要有render函数
  render() {
    let todoList = (
      <>
        <h1>类组件</h1>
        <div className="form">
          <input
            type="text"
            value={this.state.inputVal}
            placeholder="添加代办"
            onChange={this.handleChange.bind(this)}
          />
          <button onClick={this.handleAdd}>添加</button>
          <ul>
            {
              // this.state状态数据的应用
              this.state.list.map((item, index) => {
                return (
                  <li key={index + "todolist"}>
                    {item}
                    <button onClick={this.handleDelete.bind(this, index)}>
                      X
                    </button>
                  </li>
                );
              })
            }
          </ul>
          <p>total: {this.state.count}</p>
        </div>
      </>
    );

    return todoList;
  }
}

export default MyClass;
