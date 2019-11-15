import React from 'react';
import Posts from '../MyPosts/Posts';
import classes from './Profile.module.scss';

const Profile = () => {
  return (
    <div>
      <div>
        <img src="http://cdn.cnn.com/cnnnext/dam/assets/ 181010131059-australia-best-beaches-cossies-beach-cocos3.jpg" alt="imag" width="700"/>
      </div>
      <Posts />
    </div>
  )
}

export default Profile;