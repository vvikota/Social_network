import React from 'react';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <img src="https://pbs.twimg.com/profile_images/844543325915025408/vNvUHv6T_400x400.jpg" alt="logo"/>
      <h1>Social network</h1>
    </header>
  )
}

export default Header;