// import { AnyMxRecord } from "dns";
import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { profileAPI, usersAPI } from "../api/api";
import { PostType, ProfileType, PhotosType } from "../types/types";
import { AppStateType } from "./redux-store";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
  posts: [
    {id: 1, message: 'First post!', likesCount: 1},
    {id: 2, message: 'Second post', likesCount: 3},
    {id: 3, message: 'My post', likesCount: 7},
  ] as Array<PostType>,
  profile: null as null | ProfileType,
  status: "" as string
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
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
      };
    }

    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }

    case SET_STATUS: {
      return {...state, status: action.status}
    }

    case DELETE_POST: {
      return {...state, posts: state.posts.filter(post => post.id !== action.postId) }
    }

    case SAVE_PHOTO_SUCCESS: {
      return {...state, profile: {...state.profile, photos: action.photos} as ProfileType }
    }

    default:
      return state;
  }
};

type ActionsType =
  addPostActionCreatorActionType |
  setUserProfileActionCreator |
  setStatusActionCreator |
  deletePostActionCreator |
  savePhotoSuccessActionCreator

type addPostActionCreatorActionType = {
  type: typeof ADD_POST
  newPostText: string
}

type setUserProfileActionCreator = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}

type setStatusActionCreator = {
  type: typeof SET_STATUS
  status: string
}

type deletePostActionCreator = {
  type: typeof DELETE_POST
  postId: number
}

type savePhotoSuccessActionCreator = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}

export const addPostActionCreator = 
  (newPostText: string): addPostActionCreatorActionType => ({ type: ADD_POST, newPostText});
export const setUserProfile =
  (profile: ProfileType): setUserProfileActionCreator => ({type: SET_USER_PROFILE, profile});
export const setStatus =
  (status: string): setStatusActionCreator => ({type: SET_STATUS, status});
export const deletePost =
  (postId: number): deletePostActionCreator => ({type: DELETE_POST, postId});
export const savePhotoSuccess =
  (photos: PhotosType): savePhotoSuccessActionCreator => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  const response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data))
}

export const updateStatus = (status: string): ThunkType => async(dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if(response.data.resultCode === 0){
    dispatch(setStatus(status));
  }
}

export const savePhoto = (file: string): ThunkType => async(dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if(response.data.resultCode === 0){
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
}

export const saveProfile = (profile: ProfileType) => async(dispatch: any, getState: any) => {
  let userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
  if(response.data.resultCode === 0){
    dispatch(getUserProfile(userId))
  } else {
    // console.log(`error`);
    dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
    return Promise.reject({_error: response.data.messages[0]});
  }
}

export default profileReducer;