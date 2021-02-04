import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileType } from "../../types/types";

type PropTypes = {
  isOwner: boolean
  profile: null | ProfileType
  status: string
  updateStatus: (status: string) => void
  savePhoto: (file: any) => void
  saveProfile: (profile: ProfileType) => void
}

const Profile: React.FC<PropTypes> = (props) => {
  const {
    isOwner,
    profile,
    status,
    updateStatus,
    savePhoto,
    saveProfile
  } = props;
  console.log(props)

  return(
    <div className={style.content}>
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        savePhoto={savePhoto}
        saveProfile={saveProfile}
      />
      <MyPostsContainer />
    </div>
  )
};

export default Profile;