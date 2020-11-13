import React from "react";
import * as axios from "axios";
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component{
  constructor(props) {
    super(props);

    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render(){
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
  </section>
  }
}

export default Users;