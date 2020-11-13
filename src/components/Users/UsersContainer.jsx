import { connect } from "react-redux";
import Users from "./Users";
import {setUserAC, toggleFollowAC} from "../../redux/users-reducer";

let MapStateToProps = (state) => ({
  users: state.usersPage.users
})

let MapDispatchToProps = (dispatch) => ({
  toggleFollowAC: (userId) => {
    dispatch(toggleFollowAC(userId))
  },
  setUsers: (users) => {
    dispatch(setUserAC(users))
  }
})

const UsersContainer =  connect(MapStateToProps, MapDispatchToProps)(Users)

export default UsersContainer;