import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return(

    <div className={style.content}>
      <img src="https://kogdakotika.net/media/post_images/title_page_m_ChtRYfI.jpg" className={style.background} alt="beach"/>
      <MyPosts/>
    </div>
  )
}

export default Profile