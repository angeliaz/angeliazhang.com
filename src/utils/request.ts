import axios from 'axios';
import qs from 'qs';
import { AxiosResponse, AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: '/',
  timeout: 8000,
  withCredentials: true,
  responseType: 'json',
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  validateStatus(status: number) {
    return status >= 200 && status <= 304;
  },
  transformResponse: [(data: AxiosResponse) => data],
  paramsSerializer(params: any) {
    return qs.stringify(params);
  },
};

const service = axios.create(config);

// 添加请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers['X-Token'] = 'test';
    return config;
  }, err => {
    return Promise.reject(err);
  }
);

// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
  res => {
    return res.data;
  }, err => {
    return Promise.reject(err);
  }
)

export default service;

