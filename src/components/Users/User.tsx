
import React from 'react';
import styles from './user.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../types/types';

type PropsType = {
  user: UserType
  followingInProgress: Array<number>
  changeFollowed: (isFollowed: boolean, userId: number) => void
}

const User: React.FC<PropsType> = (props) => {
  const {user, followingInProgress, changeFollowed} = props;

  return <> 
    <div className={styles.photoBlock}>
      <NavLink to={'/profile/' + user.id}>
        <img
          src={user.photos.small === null ? userPhoto : user.photos.small}
          alt="user-img"
          className={styles.photo}
        />
      </NavLink>  

      <button
        disabled={followingInProgress.some(id => id === user.id)}
        className= { user.followed ? styles.unfollow : styles.follow}
        onClick={() => {changeFollowed(user.followed, user.id)}}
      >
        { user.followed ? 'Unfollow' : 'Follow'}
      </button>

    </div>

    <div className={styles.userInformation}>
      <div>
        <span className={styles.name}>{user.name}</span>
        <span className={styles.status}>{user.status}</span>
      </div>

      <div>
        <span className={styles.country}>{user.id}</span>
        <span className={styles.city}>{user.uniqueUrlName}</span>
      </div>
    </div>
  </>  
}

export default User;