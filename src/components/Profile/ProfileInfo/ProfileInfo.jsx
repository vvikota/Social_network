import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const backGround = "https://kogdakotika.net/media/post_images/title_page_m_ChtRYfI.jpg";

const ProfileInfo = ({profile,status,updateStatus}) => {
  if(!profile) {
    return <Preloader />
  }
  return(
    <div 
      className={style.profileDecsription}
      style={ {backgroundImage: `url(${backGround})`} }
    >
      <img 
        src={profile.photos.large}
        alt="userPhoto"
        className={style.profilePhoto}
      />
      <div className={style.profileText}>
        <h2>{profile.fullName}</h2>
        <span>Статус поиска работы: {profile.lookingForAJobDescription}</span>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  )
};

export default ProfileInfo;