import React from 'react';
import classes from './Navbar.module.scss';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile' activeClassName={classes.activeLink}>Profiles</NavLink>
      </div>
      <div className={classes.item} >
        <NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;