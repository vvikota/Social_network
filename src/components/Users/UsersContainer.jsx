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
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.requestUsers(pageNumber, this.props.pageSize)
  }

  render(){
    return <>
      { this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        toggleFollowAC={this.props.toggleFollowAC}
        followingInProgress={this.props.followingInProgress}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        changeFollowed={this.props.changeFollowed}
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