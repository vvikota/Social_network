// import { ThunkAction } from "redux-thunk";
import { authAPI} from "../api/auth-api";
import { securityAPI } from "../api/security-api";
import { ResultCodesEnum, ResultCodesForCaptcha} from "../api/api";
import { BaseThunkType, InferActionsTypes } from "./redux-store";
// import { Action } from "redux";
import { stopSubmit } from "redux-form";
// import { AppStateType } from "./redux-store";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
  isFetching: false as boolean,
  userId: null as null | number,
  email: null as null | string,
  login :null as null | string,
  isAuth: false as boolean,
  captchaUrl: null as null | string
};

const authReducer = (state : initialStateType = initialState, action: ActionsType) : initialStateType => {
  switch(action.type){
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }

    default: return state;
  }
};

export const actions = {
  setUserData: 
    (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => (
      { type: SET_USER_DATA, payload: {userId, email, login, isAuth}} as const
    ),
  
  getCaptchaUrlSucces: (captchaUrl: string) => (
      { type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}} as const
    ),

}

export const getAuthUserData = (): ThunkType => async (dispatch: any) => {
  let meData = await authAPI.me();
  
  if(meData.resultCode === ResultCodesEnum.Success){
    let {id, login, email} = meData.data;
    dispatch(actions.setUserData(id, login, email, true));
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: null | string): ThunkType =>
 async (dispatch: any) => {
  let loginData = await authAPI.login(email, password, rememberMe, captcha)
  
  if(loginData.resultCode === ResultCodesEnum.Success){
    dispatch(getAuthUserData());
  } else {
    if (loginData.resultCode === ResultCodesForCaptcha.CaptchaIsRequired){
      dispatch(getCaptchaUrl());
    }
  }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
  const data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;

  dispatch(actions.getCaptchaUrlSucces(captchaUrl));
} 

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();

  if(response.data.resultCode === 0){
    dispatch(actions.setUserData(null, null, null, false));
  }
}

export default authReducer;

export type initialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>