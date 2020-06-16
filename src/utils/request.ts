import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {baseURL} from "@/config/env";

const service = axios.create({
  baseURL,
  timeout: 5000
})
service.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
  return config
}, error => {
  console.log(error)
})

service.interceptors.response.use((response: AxiosResponse): AxiosResponse => {
  return response
}, error => {
  console.log(error)
})

export default service
