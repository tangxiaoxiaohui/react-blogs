import axios from "axios";
import { API_BESC_URL } from "../config/besc.config";

// 创建一个请求实例
const service = axios.create({
  // api的base_url
  baseURL: API_BESC_URL,
  // 请求超时设置
  timeout: 40000,
});

// 请求拦截器
service.interceptors.request.use(
  async (config) => {
    // 继续请求
    return config;
  },
  async (error) => {
    // todo 请求失败
    return Promise.reject({ code: 9999, content: "", error });
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { data, status } = response;
    if (status === 204 || status === 200) {
      return Promise.resolve(data);
    }
    return Promise.reject({ code: 9999, content: "", response });
  },
  (error) => {
    const { response = { status: 0, data: {} } } = error;
    return Promise.reject({ code: 9999, content: "", response, error });
  }
);

export default service;
