import React from 'react';
import Posts from '../MyPosts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.scss';

const Profile = () => {
  return (
    <div>
      <ProfileInfo/>
      <Posts />
    </div>
  )
}

export default Profile;