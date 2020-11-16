import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader'

let backGround = "https://kogdakotika.net/media/post_images/title_page_m_ChtRYfI.jpg";

let specialStyle = {
  backgroundImage: `url(${backGround})`
}

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }
  // debugger;
  return(
      <div 
        className={style.profileDecsription}
        style={ specialStyle }
      >
        <img 
          src={props.profile.photos.large}
          alt="userPhoto"
          className={style.profilePhoto}
        />
        <div className={style.profileText}>
          <h2>{props.profile.fullName}</h2>
          <span>Статус поиска работы: {props.profile.lookingForAJobDescription}</span>
        </div>
      </div>
  )
};

export default ProfileInfo