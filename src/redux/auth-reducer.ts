import {authAPI, securityAPI} from "../api/api";

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

const authReducer = (state : initialStateType = initialState, action: any) : initialStateType => {
  switch(action.type){
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
        // userId: "sdfsf"
      }

    default: return state;
  }
};

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

export const getAuthUserData = () => async (dispatch: any) => {
  let response = await authAPI.me();
 
  if(response.data.resultCode === 0){
    let {id, login, email} = response.data.data;
    dispatch(setUserData(id, login, email, true));
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: boolean) => async (dispatch: any) => {
  let response = await authAPI.login(email, password, rememberMe, captcha)
  
  if(response.data.resultCode === 0){
    dispatch(getAuthUserData());
  } else {
    if (response.data.resultCode === 10){

      dispatch(getCaptchaUrl());
    }
  }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;

  dispatch(getCaptchaUrlSucces(captchaUrl));
} 

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();

  if(response.data.resultCode === 0){
    dispatch(setUserData(null, null, null, false));
  }
}

export default authReducer;
