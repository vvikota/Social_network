import { connect } from "react-redux";
import Users from "./Users";
import {followAC, setUserAC, unfollowAC} from "../../redux/users-reducer";

let MapStateToProps = (state) => ({
  users: state.usersPage.users
})

let MapDispatchToProps = (dispatch) => ({
  follow: (userId) => {
    dispatch(followAC(userId));
  },
  unfollow: (userId) => {
    dispatch(unfollowAC(userId));
  },
  setUsers: (users) => {
    dispatch(setUserAC(users))
  }
})

const UsersContainer =  connect(MapStateToProps, MapDispatchToProps)(Users)

export default UsersContainer;