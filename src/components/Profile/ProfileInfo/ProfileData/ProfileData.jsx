import React from 'react';
import style from './ProfileData.module.css';

const ProfileData = ({profile, isOwner, goToEditMode}) => {

  return <div className={style.profileDataWrapper}>

    <div className={style.dataWrapper}>
      <div className={style.profileText}>
        <h2>{profile.fullName}</h2>
        <span>My skills: {profile.lookingForAJobDescription}</span>
        <span>About me: {profile.aboutMe}</span>
        <span>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</span>
      </div>

      <div className={style.profileContacts}>
        <h4>Contacts:</h4>

        {Object.keys(profile.contacts)
          .map(key => 
            profile.contacts[key] &&
            <Contact contactTitle={key} contactValue={profile.contacts[key]} key={key}/>
          )
        }
      </div>
    </div>
    {isOwner && <button onClick={goToEditMode} className={style.editButton}>edit</button>}
  </div>
}

const Contact = ({contactTitle, contactValue}) => {
  return <div className={style.contactWrapper}>
    <span className={style.contactTitle}>{contactTitle}:</span>
    <span className={style.contactValue}>{contactValue}</span>
  </div>
}

export default ProfileData;