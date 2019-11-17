import React from 'react';
import classes from './ProfileInfo.module.scss';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="http://cdn.cnn.com/cnnnext/dam/assets/ 181010131059-australia-best-beaches-cossies-beach-cocos3.jpg" alt="imag" width="700"/>
      </div>
      <div className={classes.descriptionBlock}></div>  
    </div>
  )
}

export default ProfileInfo
