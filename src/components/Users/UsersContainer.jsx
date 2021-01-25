import { connect } from "react-redux";
import {
  setCurrentPage,
  toggleFollowAC,
  toggleFollowingProgress,
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
 
class UsersContainer extends React.Component{
  

  componentDidMount() {
    const {requestUsers, currentPage, pageSize} = this.props;
    requestUsers(currentPage, pageSize)
  }

  onPageChanged = (pageNumber) => {
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
      toggleFollowAC,
      followingInProgress,
      toggleFollowingProgress,
      changeFollowed
    } = this.props;

    return <>
      { isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={this.onPageChanged}
        users={users}
        toggleFollowAC={toggleFollowAC}
        followingInProgress={followingInProgress}
        toggleFollowingProgress={toggleFollowingProgress}
        changeFollowed={changeFollowed}
      />
  </>
  }
}

let MapStateToProps = (state) => ({
  users: getUsersSelector(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state),
})

export default compose(
  connect(MapStateToProps, {
    toggleFollowAC, setCurrentPage, toggleFollowingProgress, requestUsers, changeFollowed
  }),
  withAuthRedirect
)(UsersContainer)