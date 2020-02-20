import React from 'react';
import style from './Post.module.css';

const Posts = (props) => {
  return (
    <div className={style.item}>
      <img src="https://img09.rl0.ru/afisha/-x700/s1.afisha.net/MediaStorage/aa/8f/a06740b631464edaa4cf83768faa.jpg" alt="pic" className={style.ava} />
      {props.message}
      <span>Like: {props.like}</span>
    </div>
  )
};

export default Posts

