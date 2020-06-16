import request from '@/utils/request'
import {AxiosPromise} from "axios";

export function login(data: { account: string, pwd: string }): AxiosPromise {
  return request.get('', {
    params: data
  })
}
