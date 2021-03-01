import axios from "axios";
import { UserType } from "../types/types";

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '5c1979ac-0a12-4a40-8271-c23387e118fd'
  }
})

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodesForCaptcha {
  CaptchaIsRequired = 10
}

export type GetItemsType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}

export type ResponseType<D = {}, RC = ResultCodesEnum> = {
  data: D
  messages: Array<string>
  resultCode: RC
}