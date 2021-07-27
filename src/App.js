import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import Home from "./components/Home/index";
import MyButton from "./components/MyButton/index";
import MySelect from "./components/MySelect/index";
import MyTable from "./components/MyTable/index";
import MyAsync from "./components/MyAsync/index";
import MyRedux from "./components/MyRedux";
import MyPassByValue from "./components/MyPassByValue";
import Other from "./components/Other/index";
import MyClass from "./components/MyClass/index";
import "./App.css";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const App = () => {
  const handleGoTo = (e) => {
    console.log("e", e);
  };
  return (
    <Router>
      <Layout>
        <Header className="header">
          {/* <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} onClick={handleGoTo}>
        <Menu.Item key="1" ><Link to='/components/MyButton'>nav 1</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/components/MySelect'>nav 2</Link></Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu> */}
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
              onClick={handleGoTo}
            >
              <SubMenu key="sub1" title="Ant design">
                <Menu.Item key="MyButton">
                  <Link to="/components/MyButton">Button</Link>
                </Menu.Item>
                <Menu.Item key="MySelect">
                  <Link to="/components/MySelect">Select</Link>
                </Menu.Item>
                <Menu.Item key="MyTable">
                  <Link to="/components/MyTable">Table</Link>
                </Menu.Item>
                <Menu.Item key="other">
                  <Link to="/components/Other">其他组件</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title="demo">
                <Menu.Item key="async">
                  <Link to="/components/MyAsync">异步请求</Link>
                </Menu.Item>
                <Menu.Item key="redux">
                  <Link to="/components/MyRedux">Redux</Link>
                </Menu.Item>
                <Menu.Item key="pass">
                  <Link to="/components/MyPassByValue">组件之间传值</Link>
                </Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title="类组件">
                <Menu.Item key="myClass">
                  <Link to="/components/MyClass">类组件的使用</Link>
                </Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 1180,
              }}
            >
              <Route path="/components/" exact component={Home}></Route>
              <Route
                path="/components/MyButton"
                excat
                component={MyButton}
              ></Route>
              <Route
                path="/components/MySelect"
                excat
                component={MySelect}
              ></Route>
              <Route
                path="/components/MyTable"
                exact
                component={MyTable}
              ></Route>
              <Route
                path="/components/MyAsync"
                exact
                component={MyAsync}
              ></Route>
              <Route
                path="/components/MyRedux"
                exact
                component={MyRedux}
              ></Route>
              <Route
                path="/components/MyPassByValue"
                exact
                component={MyPassByValue}
              ></Route>
              <Route path="/components/Other" exact component={Other}></Route>
              <Route
                path="/components/MyClass"
                exact
                component={MyClass}
              ></Route>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};
export default App;
