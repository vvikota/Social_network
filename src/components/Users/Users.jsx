import React from "react";
import styles from './users.module.css';

const Users = (props) => {
  return <>
    {
      props.users.map(user => <section key={user.id} className={styles.userCard}>

          <div className={styles.photoBlock}>
            <img src={user.photoURL} alt="user-img" className={styles.photo} />
            { user.followed ?
              <button onClick={() => {props.unfollow(user.id)}} className={styles.unfollow}> Unfollow </button> :
              <button onClick={() => {props.follow(user.id)}} className={styles.follow}> Follow </button>
            }
          </div>

          <div className={styles.userInformation}>
            <div>
              <span className={styles.name}>{user.fullName}</span>
              <span className={styles.status}>{user.status}</span>
            </div>

            <div>
              <span className={styles.country}>{user.location.country}</span>
              <span className={styles.city}>{user.location.city}</span>
            </div>
          </div>
        </section>)
    }
  </>
}

export default Users;