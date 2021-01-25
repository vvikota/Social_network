import React, {useState} from 'react';
import styles from './paginator.module.css';

const Paginator = (props) => {
  const {totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 5} = props;

  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];

  for (let i=1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return <div className={styles.pagination}>
      
      {portionNumber > 1 &&
        <button onClick={() => {setPortionNumber(portionNumber - 1)}} className={styles.prevButton}>
          PREV
        </button>
      }
      
      {pages
        .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
        .map((page, index) => {
          return (
            <span
              key={index}
              className={currentPage === page ? styles.currentPage : null}
              onClick={() => onPageChanged(page)}
            >
              {page}
            </span>
          )
        })
      }
      
      {portionCount > portionNumber &&
        <button onClick={() => {setPortionNumber(portionNumber + 1)}} className={styles.nextButton}>
          NEXT
        </button>
      }
    </div>
}

export default Paginator;