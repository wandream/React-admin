import React, { Component } from "react";

// // 引入 ECharts 主模块
// import * as echarts from "echarts/lib/echarts";
// // 引入柱状图
// import "echarts/lib/chart/bar";
// // 引入提示框和标题组件
// import "echarts/lib/component/tooltip";
// import "echarts/lib/component/title";

class Home extends Component {
  //   componentDidMount() {
  //     // 基于准备好的dom，初始化echarts实例
  //     var myChart = echarts.init(document.getElementById("main"));
  //     // 绘制图表
  //     myChart.setOption({
  //       tooltip: {},
  //       xAxis: {
  //         type: "category",
  //         data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  //       },
  //       yAxis: {},
  //       series: [
  //         {
  //           name: "销量",
  //           type: "bar",
  //           data: [5, 20, 36, 10, 10, 20],
  //         },
  //       ],
  //     });
  //   }
  render() {
    return <div id="main" style={{ height: 400 }}></div>;
  }
}

export default Home;
