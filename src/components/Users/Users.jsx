import React from "react";
import * as axios from "axios";
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component{

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);

      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);

      })
  }

  render(){
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];

    for (let i=1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return <section className={styles.users}>

    {
      this.props.users.map(user => <div key={user.id} className={styles.userCard}>

          <div className={styles.photoBlock}>
            <img
              src={user.photos.small === null ? userPhoto : user.photos.small}
              alt="user-img"
              className={styles.photo}
            />

            <button
              className= { user.followed ? styles.unfollow : styles.follow}
              onClick={() => {this.props.toggleFollowAC(user.id)}}
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
        </div>)
    }

      <div className={styles.pagination}>
        {pages.map((page, index) => {
          return (
            <span
              key={index}
              className={this.props.currentPage === page ? styles.currentPage : null}
              onClick={() => this.onPageChanged(page)}
            >
              {page}
            </span>
          )
        })}
      </div>
  </section>
  }
}

export default Users;