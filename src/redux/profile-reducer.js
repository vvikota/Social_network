import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    {id: 1, message: 'First post!', likesCount: 1},
    {id: 1, message: 'Second post', likesCount: 3},
    {id: 1, message: 'My post', likesCount: 7},
  ],
  // newPostText: 'React samurai',
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        // newPostText: ''
      };
    }

    // case UPDATE_NEW_POST_TEXT: {
    //   let stateCopy = {...state};
    //   stateCopy.newPostText = action.newText;
    //   return stateCopy;
    // }

    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }

    case SET_STATUS: {
      return {...state, status: action.status}
    }

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText});
// export const updateNewPostTextActionCreator = (text) => (
//   {type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  });
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data));
  })
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(response => {
    if(response.data.resultCode === 0){
      dispatch(setStatus(status));
    }
  })
}

export default profileReducer;