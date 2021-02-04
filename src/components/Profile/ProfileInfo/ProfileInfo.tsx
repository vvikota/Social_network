import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import { ProfileType } from '../../../types/types';

const backGround = "https://kogdakotika.net/media/post_images/title_page_m_ChtRYfI.jpg";

type PropTypes = {
  profile: null | ProfileType
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (file: any) => void
  saveProfile: (profile: ProfileType) => void
}

const ProfileInfo: React.FC<PropTypes> = (props) => {

  const {profile, status, updateStatus, isOwner, savePhoto, saveProfile} = props;

  let [editMode, setEditMode ] = useState(false);

  if(!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    )
  };

  return(
    <div 
      className={style.profileDecsription}
      style={ {backgroundImage: `url(${backGround})`} }
    >
      <div className={style.avatarWrapper}>
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
        
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>

      { editMode &&
        <ProfileDataForm
          initialValues={profile}
          profile = {profile}
          onSubmit={onSubmit} 
        />
      }  

      <ProfileData
        profile={profile}
        isOwner={isOwner}
        goToEditMode={() => setEditMode(true)}
      />

    </div>
  )
};

export default ProfileInfo;