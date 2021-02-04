import React from 'react';
import styles from './users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { UserType } from '../../types/types';

type PropsType = {
  users: Array<UserType>
  followingInProgress: Array<number>
  changeFollowed: (isFollowed: boolean, userId: number) => void
  totalUsersCount: number
  pageSize: number
  onPageChanged: (pageNumber: number) => void
  currentPage: number
}

const Users: React.FC<PropsType> = (props) => {
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