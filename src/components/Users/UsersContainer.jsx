import { connect } from "react-redux";
import Users from "./Users";
import {setCurrentPage, setTotalUsersCount, setUserAC, toggleFollowAC} from "../../redux/users-reducer";

let MapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage
})

let MapDispatchToProps = (dispatch) => ({
  toggleFollowAC: (userId) => {
    dispatch(toggleFollowAC(userId))
  },
  setUsers: (users) => {
    dispatch(setUserAC(users))
  },
  setCurrentPage: (pageNumber) => {
    dispatch(setCurrentPage(pageNumber))
  },
  setTotalUsersCount: (totalCount) => {
    dispatch(setTotalUsersCount(totalCount))
  }
})

const UsersContainer =  connect(MapStateToProps, MapDispatchToProps)(Users)

export default UsersContainer;