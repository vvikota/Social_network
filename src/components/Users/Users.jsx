import React from 'react';
import styles from './users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = (props) => 
  <section className={styles.users}>
    {props.users.map(user =>
      <div key={user.id} className={styles.userCard}>
        <User 
          user={user} 
          followingInProgress={props.followingInProgress}
          changeFollowed={props.changeFollowed}
        />
      </div>
    )}

    <Paginator 
      totalUsersCount={props.totalUsersCount}
      pageSize={props.pageSize}
      onPageChanged={props.onPageChanged}
      currentPage={props.currentPage}
    />
  </section>

export default Users;