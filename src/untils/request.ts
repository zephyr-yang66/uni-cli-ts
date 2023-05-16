import axios from 'axios';
const instance = axios.create({
  baseURL: process.env.BASE_URL || '',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});
// 添加拦截器
instance.interceptors.request.use(
  (config) => {
    // 处理请求数据
    return config;
  },
  (error: any) => {
    // 错误处理
    Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => {
    // 处理响应数据
    return response.data;
  },
  (error: any) => {
    let message = '';
    if (error.response) {
      // 服务器返回错误
      message = error.response.data.msg || '';
    } else if (error.request) {
      // 请求未得到回应
      message = error.request.statusText;
    } else {
      // 其他错误，可能是因为断网或浏览器跨域等原因
      message = error.message;
    }
    // 构造错误信息对象，并返回
    const errMsg = { message };
    return Promise.reject(errMsg);
  }
);
export function get(url: string, params: any) {
  return instance({
    url,
    method: 'GET',
    params,
  });
}

export function post(url: string, data: any) {
  return instance({
    url,
    method: 'POST',
    data,
  });
}
