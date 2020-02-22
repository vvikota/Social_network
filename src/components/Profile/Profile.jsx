import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return(

    <div className={style.content}>
      <ProfileInfo/>
      <MyPosts posts={props.profileData.posts}
               newPostText={props.profileData.newPostText}
               updateNewPostText={props.updateNewPostText}
               addPost={props.addPost}/>
    </div>
  )
};

export default Profile