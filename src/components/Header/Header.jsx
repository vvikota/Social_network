import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
const logoImg = 'https://image.shutterstock.com/image-vector/vi-logo-initial-triangle-260nw-1202514451.jpg';

const Header = (props) => {
  console.log(props)
  return (
    <header className={style.header}>
      <img src={logoImg} alt="logo"/>
      {props.isAuth ?
        <span>{props.login}</span> :
        <NavLink className={style.loginBlock} to={'/login'}>Login</NavLink>
      }
    </header>)
};

export default Header;