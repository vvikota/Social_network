import React from 'react';
import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
        <a href='/profile'>Profiles</a>
      </div>
      <div className={classes.item}>
        <a href='/dialogs'>Messages</a>
      </div>
      <div className={classes.item}>
        <a href='/news'>News</a>
      </div>
      <div className={classes.item}>
        <a href='/music'>Music</a>
      </div>
    </nav>
  )
}

export default Navbar;