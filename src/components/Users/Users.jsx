import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import * as axios from "axios";
import {usersAPI} from "../../api/api";
// const apiKey = '5c1979ac-0a12-4a40-8271-c23387e118fd'

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
          // disabled={true}
          disabled={props.followingInProgress.some(id => id === user.id)}
          className= { user.followed ? styles.unfollow : styles.follow}
          onClick={() => {
            props.toggleFollowingProgress(true, user.id)
            // debugger;
              user.followed ?
                usersAPI.unfollow(user.id)
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.toggleFollowAC(user.id)
                    }
                    props.toggleFollowingProgress(false, user.id)
                  }) :
              usersAPI.follow(user.id)
                .then(response => {
                  if (response.data.resultCode === 0) {
                    props.toggleFollowAC(user.id)
                  }
                  props.toggleFollowingProgress(false, user.id)
                });
          }}
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