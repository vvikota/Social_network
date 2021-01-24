import {usersAPI} from "../api/api";

const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
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

export const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USER_COUNT, totalUsersCount })
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const requestUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));

    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  }
};

export const changeFollowed = (isFollowed, userId) => {
  return async (dispatch) => {
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