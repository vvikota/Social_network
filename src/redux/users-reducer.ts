import { ResultCodesEnum } from "../api/api";
import { usersAPI } from "../api/users-api";
import { UserType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 5 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: true as boolean,
  followingInProgress: [] as Array<number>// array of users IDs
};

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch(action.type) {
    case 'TOGGLE_FOLLOW':
      return {
        ...state,
        users: state.users.map(user => {
          if(user.id === action.userId){
            return {...user, followed: !user.followed}
          }
          return user;
        })
      }
    case 'SET_USERS': {
      return {...state, users: action.users}
    }

    case 'SET_CURRENT_PAGE': {
      return {...state, currentPage: action.currentPage}
    }

    case 'SET_TOTAL_USER_COUNT': {
      return {...state, totalUsersCount: action.totalUsersCount}
    }

    case 'TOGGLE_IS_FETCHING': {
      return {...state, isFetching: action.isFetching}
    }

    case 'TOGGLE_IS_FOLLOWING_PROGRESS': {
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

export const actions = {
  toggleFollowAC: (userId: number) => ({type: 'TOGGLE_FOLLOW', userId} as const),
  
  setUsers: (users: Array<UserType>) => ({type: 'SET_USERS', users} as const),

  setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const),

  setTotalUsersCount: (totalUsersCount: number) => ({ type: 'SET_TOTAL_USER_COUNT', totalUsersCount } as const),

  toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),

  toggleFollowingProgress: (isFetching: boolean, userId: number) =>
    ({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const)
}

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => {
  return async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true));

    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
  }
};


export const changeFollowed = (isFollowed: boolean, userId: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    
    let response;

    isFollowed ?
      response = await usersAPI.unfollow(userId) : 
      response = await usersAPI.follow(userId);

    (response.resultCode === ResultCodesEnum.Success) && dispatch(actions.toggleFollowAC(userId));
    dispatch(actions.toggleFollowingProgress(false, userId));    
  }
}


export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

export default usersReducer;