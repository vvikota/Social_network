import { connect } from "react-redux";
import {
  actions,
  // setCurrentPage,
  requestUsers,
  changeFollowed
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
  getUsersSelector,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress
} from "../../redux/users-selectors";
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";
 
type MapStatePropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<UserType>
  followingInProgress: Array<number>
}

type MapDispatchPropsType = {
  requestUsers: (currentPage: number, pageSize: number) => void
  changeFollowed: (isFollowed: boolean, userId: number) => void
  setCurrentPage: (pageNumber: number) => void 
}

type OwnPropsType = {
  pageTitle: string
}

type PropsType = MapDispatchPropsType & MapStatePropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType>{
  
  componentDidMount() {
    const {requestUsers, currentPage, pageSize} = this.props;
    requestUsers(currentPage, pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    const {setCurrentPage, requestUsers} = this.props;
    setCurrentPage(pageNumber);
    requestUsers(pageNumber, this.props.pageSize)
  }

  render(){
    const {
      currentPage,
      isFetching,
      totalUsersCount,
      pageSize,
      users,
      followingInProgress,
      changeFollowed,
      pageTitle
    } = this.props;

    return <>
      <h2>{pageTitle}</h2>
      { isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={this.onPageChanged}
        users={users}
        followingInProgress={followingInProgress}
        changeFollowed={changeFollowed}
      />
  </>
  }
}

const MapStateToProps = (state: AppStateType): MapStatePropsType => ({
  users: getUsersSelector(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state),
})

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    MapStateToProps, {
      setCurrentPage: actions.setCurrentPage,
      requestUsers,
      changeFollowed
    }
  ),
  withAuthRedirect
)(UsersContainer)