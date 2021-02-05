import axios from "axios";
import { ProfileType } from "../types/types";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '5c1979ac-0a12-4a40-8271-c23387e118fd'
  }
})

export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },

  unfollow: (userId: number) => {
    return instance.delete(`follow/${userId}`)
  },

  follow: (userId: number) => {
    return instance.post(`follow/${userId}`, {})
  },

  getProfile(userId: number) {
    console.warn('Obsolete method. Please use profileAPI object.')
    return profileAPI.getProfile(userId);
  },
}

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status });
  },
  savePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append("image", photoFile);

    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  saveProfile(profile: ProfileType) {
    return instance.put(`profile`, profile );
  }
}

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodesForCaptcha {
  CaptchaIsRequired = 10
}

type MeResponseType = {
  data: {id: number, email: string, login: string}
  resultCode: number
  messages: Array<string>
}

type LoginResponseType = {
  data: {userId: number}
  resultCode: ResultCodesEnum | ResultCodesForCaptcha
  messages: Array<string>
}

export const authAPI = {
  async me() {
    const res = await instance.get<MeResponseType>(`auth/me`);
    return res.data;
  },
  
  async login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
    const res = await instance.post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha });
    return res.data;
  },

  logout() {
    return instance.delete(`auth/login`);
  }
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`)
  }
}



