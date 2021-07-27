import qs from "querystring";
import "whatwg-fetch";

// get
export function httpGet(url) {
  const result = fetch(url);
  return result;
}
// post
export function httpPost(url, params) {
  const result = fetch(url, {
    method: "POST",
    headers: {
      // 告诉服务器，能接受json格式的返回类型
      Accept: "application/json",
      // 告诉服务器，提交的数据类型
      // "Content-Type": "application/json",
    },
    body: qs.stringify(params),
  });
  return result;
}
