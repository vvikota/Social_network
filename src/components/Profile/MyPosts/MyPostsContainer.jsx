import {actions} from "../../../redux/profile-reducer.ts";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText
})

let mapDispatchToProps = (dispatch) => ({
  addPost: (newPostText) => {
      dispatch(actions.addPostActionCreator(newPostText))
    }
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
