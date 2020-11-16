import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i=1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return <section className={styles.users}>
    {props.users.map(user => <div key={user.id} className={styles.userCard}>

      <div className={styles.photoBlock}>
        <NavLink to={'/profile/' + user.id}>
          <img
            src={user.photos.small === null ? userPhoto : user.photos.small}
            alt="user-img"
            className={styles.photo}
          />
        </NavLink>  

        <button
          className= { user.followed ? styles.unfollow : styles.follow}
          onClick={() => {props.toggleFollowAC(user.id)}}
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
    </div>)}

    <div className={styles.pagination}>
      {pages.map((page, index) => {
        return (
          <span
            key={index}
            className={props.currentPage === page ? styles.currentPage : null}
            onClick={() => props.onPageChanged(page)}
          >
              {page}
            </span>
        )
      })}
    </div>
  </section>
}

export default Users;