import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png';

const backGround = "https://kogdakotika.net/media/post_images/title_page_m_ChtRYfI.jpg";

const ProfileInfo = ({profile,status,updateStatus,isOwner,savePhoto}) => {
  if(!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  return(
    <div 
      className={style.profileDecsription}
      style={ {backgroundImage: `url(${backGround})`} }
    >
      <div className={style.avatarWrapper}>
        <img 
          src={profile.photos.large || userPhoto}
          alt="userPhoto"
          className={style.profilePhoto}
        />
        {isOwner &&
          <label className={style.downloadLabel}>
            <input type={"file"}/>
            Загрузить аватар
          </label>
        }
      </div>

      <div className={style.profileText}>
        <h2>{profile.fullName}</h2>
        <span>Статус поиска работы: {profile.lookingForAJobDescription}</span>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  )
};

export default ProfileInfo;