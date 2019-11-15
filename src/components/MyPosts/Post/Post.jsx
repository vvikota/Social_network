import React from 'react';
import classes from './Post.module.scss';

const Post = (props) => {
  return (
    <div className={classes.post}>
      <img src='http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg'  alt='ava'/>
      <div>
        <span>{props.message}</span>
        <span className={classes.like}>Total likes: {props.likes}</span>
      </div>
    </div>
 
  )
}

export default Post;