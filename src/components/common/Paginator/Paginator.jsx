import React from 'react';
import styles from './paginator.module.css';

const Paginator = (props) => {
  const {totalUsersCount, pageSize, currentPage, onPageChanged} = props;

  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  for (let i=1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return <div className={styles.pagination}>
      {pages.map((page, index) => {
        return (
          <span
            key={index}
            className={currentPage === page ? styles.currentPage : null}
            onClick={() => onPageChanged(page)}
          >
            {page}
          </span>
        )
      })}
    </div>
}

export default Paginator;