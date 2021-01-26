import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  const {isOwner,profile,status,updateStatus} = props;

  return(
    <div className={style.content}>
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        savePhoto={props.savePhoto}
      />
      <MyPostsContainer />
    </div>
  )
};

export default Profile;