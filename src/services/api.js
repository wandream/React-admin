// 请求方法管理
import { httpGet, httpPost } from "./http";
import base from "./base";

const api = {
  getData() {
    const url = base.getData;
    return httpGet(url);
  },
  Login(params) {
    const url = base.login;
    return httpPost(url, params);
  },
};

export default api;
