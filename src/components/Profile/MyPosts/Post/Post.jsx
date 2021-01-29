import React, {Component} from 'react';
import style from './Post.module.css';

const Post = (props) => {
  const {message,like} = props;
  return (
    <div className={style.item}>
      <img 
        src="https://img09.rl0.ru/afisha/-x700/s1.afisha.net/MediaStorage/aa/8f/a06740b631464edaa4cf83768faa.jpg"
        alt="pic" 
        className={style.ava} 
      />
      <div className={style.postContent}>
        <div className={style.postText}>{message}</div>
        <span className={style.likesCounter}>Like: {like}</span>
      </div>
    </div>
  )
};

export default Post;