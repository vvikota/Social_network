import React from 'react';
import classes from './Navbar.module.scss';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
        <a href='#'>Profiles</a>
      </div>
      <div className={classes.item}>
        <a href='#'>Messages</a>
      </div>
      <div className={classes.item}>
        <a href='#'>News</a>
      </div>
      <div className={classes.item}>
        <a href='#'>Music</a>
      </div>
    </nav>
  )
}

export default Nav;