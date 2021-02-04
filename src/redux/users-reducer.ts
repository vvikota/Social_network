import { usersAPI } from "../api/api";
import { UserType } from "../types/types";

const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 5 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: true as boolean,
  followingInProgress: [] as Array<number> // array of users IDs
};

export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch(action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if(user.id === action.userId){
            return {...user, followed: !user.followed}
          }
          return user;
        })
      }
    case SET_USERS: {
      return {...state, users: action.users}
    }

    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }

    case SET_TOTAL_USER_COUNT: {
      return {...state, totalUsersCount: action.totalUsersCount}
    }

    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching ?
          [...state.followingInProgress, action.userId] :
          [...state.followingInProgress.filter(id => id !== action.userId)]
      }
    }

    default: return state;
  }
}

type toggleFollowACActionType = {
  type: typeof TOGGLE_FOLLOW
  userId: number
}
export const toggleFollowAC = (userId: number): toggleFollowACActionType =>
  ({type: TOGGLE_FOLLOW, userId})

type setUsersActionType = {
  type: typeof SET_USERS
  users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): setUsersActionType =>
    ({type: SET_USERS, users})

type setCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): setCurrentPageActionType =>
  ({ type: SET_CURRENT_PAGE, currentPage })

type setTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USER_COUNT
  totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountActionType =>
  ({ type: SET_TOTAL_USER_COUNT, totalUsersCount })

type toggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType =>
  ({type: TOGGLE_IS_FETCHING, isFetching})

type toggleFollowingProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressActionType =>
  ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export const requestUsers = (currentPage: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFetching(true));

    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  }
};

export const changeFollowed = (isFollowed: boolean, userId: number) => {
  return async (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    
    let response;

    isFollowed ?
      response = await usersAPI.unfollow(userId) : 
      response = await usersAPI.follow(userId);

    (response.data.resultCode === 0) && dispatch(toggleFollowAC(userId));
    dispatch(toggleFollowingProgress(false, userId));    
  }
}

export default usersReducer;