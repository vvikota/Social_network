import { connect } from "react-redux";
import {
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleFollowAC,
  toggleFollowingProgress,
  toggleIsFetching
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from '../../api/api';
 
class UsersContainer extends React.Component{

  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.items);
        this.props.setTotalUsersCount(response.totalCount);
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.items);

      })
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
      />
  </>
  }
}

let MapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress
})

export default connect(MapStateToProps, {
  toggleFollowAC, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress
})(UsersContainer)