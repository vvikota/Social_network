import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';

const backGround = "https://kogdakotika.net/media/post_images/title_page_m_ChtRYfI.jpg";

const ProfileInfo = ({profile,status,updateStatus,isOwner,savePhoto}) => {

  let [editMode, setEditMode ] = useState(false);

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
            <input type={"file"} onChange={onMainPhotoSelected}/>
            Download avatar
          </label>
        }
      </div>

      { editMode ?
        <ProfileDataForm /> :
        <ProfileData
          profile={profile}
          isOwner={isOwner}
          goToEditMode={() => setEditMode(true)}
        />
      }
 
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {

  return <>
    {isOwner && <button onClick={goToEditMode}>edit</button>}
    <div className={style.profileText}>
      <h2>{profile.fullName}</h2>
      <span>Work search status: {profile.lookingForAJobDescription}</span>
      <span>About me: {profile.aboutMe}</span>
    </div>

    <div className={style.profileContacts}>
      <h4>Contacts</h4>

      {Object.keys(profile.contacts)
        .map(key => 
          <Contact contactTitle={key} contactValue={profile.contacts[key]} key={key}/>
        )
      }
    </div>
  </>
}

const Contact = ({contactTitle, contactValue}) => {
  return <div>
    <span className={style.contactTitle}>{contactTitle}</span>:
    <span className={style.contactValue}>{contactValue}</span>
  </div>
}

export default ProfileInfo;