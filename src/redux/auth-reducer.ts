import { ThunkAction } from "redux-thunk";
import { authAPI, ResultCodesEnum, ResultCodesForCaptcha, securityAPI } from "../api/api";
import { AppStateType } from "./redux-store";

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

export type initialStateType = typeof initialState;

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

type ActionsType = setUserDataActionType | getCaptchaUrlSuccesActionType

type setUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
};

type setUserDataActionType = {
  type: typeof SET_USER_DATA,
  payload: setUserDataActionPayloadType
};

export const setUserData =
  (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setUserDataActionType => (
    { type: SET_USER_DATA, payload: {userId, email, login, isAuth}}
  );

type getCaptchaUrlSuccesActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS,
  payload: {captchaUrl: string}
};

export const getCaptchaUrlSucces = (captchaUrl: string): getCaptchaUrlSuccesActionType => (
  { type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}}
);

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  let meData = await authAPI.me();
  
  if(meData.resultCode === ResultCodesEnum.Success){
    let {id, login, email} = meData.data;
    dispatch(setUserData(id, login, email, true));
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: null | string): ThunkType =>
 async (dispatch) => {
  let loginData = await authAPI.login(email, password, rememberMe, captcha)
  
  if(loginData.resultCode === ResultCodesEnum.Success){
    dispatch(getAuthUserData());
  } else {
    if (loginData.resultCode === ResultCodesForCaptcha.CaptchaIsRequired){
      dispatch(getCaptchaUrl());
    }
  }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;

  dispatch(getCaptchaUrlSucces(captchaUrl));
} 

export const logout = (): ThunkType => async (dispatch) => {
  let response = await authAPI.logout();

  if(response.data.resultCode === 0){
    dispatch(setUserData(null, null, null, false));
  }
}

export default authReducer;
