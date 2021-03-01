import { instance, ResponseType, ResultCodesForCaptcha, ResultCodesEnum } from './api';

type MeResponseDataType = {
  id: number,
  email: string,
  login: string
}

type LoginResponseType = {
  userId: number
}

export const authAPI = {
  async me() {
    const res = await instance.get<ResponseType<MeResponseDataType>>(`auth/me`);
    return res.data;
  },
  
  async login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
    const res =
      await instance.post<ResponseType<LoginResponseType, ResultCodesEnum | ResultCodesForCaptcha>>(`auth/login`, { email, password, rememberMe, captcha });
    return res.data;
  },

  logout() {
    return instance.delete(`auth/login`);
  }
}