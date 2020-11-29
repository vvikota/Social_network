import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

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
        ...action.data,
        isAuth: true
      }

    default: return state;
  }
};

export const setUserData = (userId, email, login) => (
  { type: SET_USER_DATA, data: {userId, email, login}}
);

export const authThunk = () => {
  return (dispatch) => {
    authAPI.me()
      .then(response => {
        if(response.data.resultCode === 0){
          let {id, login, email} = response.data.data;
          dispatch(setUserData(id, login, email));
        }
      })
  }
}

export default authReducer;