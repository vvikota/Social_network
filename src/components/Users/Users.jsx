import React from 'react';
import styles from './users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = (props) => {
  const {
    users,
    followingInProgress,
    changeFollowed,
    totalUsersCount,
    pageSize,
    onPageChanged,
    currentPage
  } = props;

  return <section className={styles.users}>
    {users.map(user =>
      <div key={user.id} className={styles.userCard}>
        <User 
          user={user} 
          followingInProgress={followingInProgress}
          changeFollowed={changeFollowed}
        />
      </div>
    )}

    <Paginator 
      totalItemsCount={totalUsersCount}
      pageSize={pageSize}
      onPageChanged={onPageChanged}
      currentPage={currentPage}
    />
  </section>
}

export default Users;