import {authAPI} from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
  isFetching: false,
  userId: null,
  email: null,
  login :null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {

  switch(action.type){
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }

    default: return state;
  }
};

export const setUserData = (userId, email, login, isAuth) => (
  { type: SET_USER_DATA, payload: {userId, email, login, isAuth}}
);

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();
 
  if(response.data.resultCode === 0){
    let {id, login, email} = response.data.data;
    dispatch(setUserData(id, login, email, true));
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe)
  
  if(response.data.resultCode === 0){
    dispatch(getAuthUserData());
  } 
}

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();

  if(response.data.resultCode === 0){
    dispatch(setUserData(null, null, null, false));
  }
}

export default authReducer;
