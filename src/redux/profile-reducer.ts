import { FormAction, stopSubmit } from "redux-form";
import { ResultCodesEnum } from "../api/api";
import { profileAPI} from "../api/profile-api";
import { PostType, ProfileType, PhotosType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

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
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case `ADD_POST`: {
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

    case `SET_USER_PROFILE`: {
      return {...state, profile: action.profile}
    }

    case `SET_STATUS`: {
      return {...state, status: action.status}
    }

    case `DELETE_POST`: {
      return {...state, posts: state.posts.filter(post => post.id !== action.postId) }
    }

    case `SAVE_PHOTO_SUCCESS`: {
      return {...state, profile: {...state.profile, photos: action.photos} as ProfileType }
    }

    default:
      return state;
  }
};

export const actions = {
  addPostActionCreator: (newPostText: string) => ({ type: `ADD_POST`, newPostText} as const),
  setUserProfile: (profile: ProfileType) => ({type: `SET_USER_PROFILE`, profile} as const),
  setStatus: (status: string) => ({type: `SET_STATUS`, status} as const),
  deletePost: (postId: number) => ({type: `DELETE_POST`, postId} as const),
  savePhotoSuccess: (photos: PhotosType) => ({type: `SAVE_PHOTO_SUCCESS`, photos} as const)
}


export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getProfile(userId);
  dispatch(actions.setUserProfile(data));
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(actions.setStatus(data))
}

export const updateStatus = (status: string): ThunkType => async(dispatch) => {
  const data = await profileAPI.updateStatus(status);
  if(data.resultCode === ResultCodesEnum.Success){
    dispatch(actions.setStatus(status));
  }
}

export const savePhoto = (file: string): ThunkType => async(dispatch) => {
  const data = await profileAPI.savePhoto(file);
  if(data.resultCode === ResultCodesEnum.Success){
    dispatch(actions.savePhotoSuccess(data.data.photos));
  }
}

export const saveProfile = (profile: ProfileType): ThunkType => async(dispatch, getState) => {
  let userId = getState().auth.userId;
  const data = await profileAPI.saveProfile(profile);
  if(data.resultCode === ResultCodesEnum.Success){
    userId != null ? dispatch(getUserProfile(userId)) : console.log("userId can't be null")
  } else {
    dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}));
    return Promise.reject({_error: data.messages[0]});
  }
}

export default profileReducer;