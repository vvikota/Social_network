import React from 'react';
import Post from './Post/Post';
import classes from './Posts.module.scss';


const Posts = () => {
  return (
    <div className={classes.content}>
      Posts block
      <Post message='Hi are you?'/>
      <Post message='I am fine, what about you?'/>
      <Post message='I am too fine'/>
      <Post message='How about go to the cinema tomorrow?'/>
      <Post message='Its a great idea'/>
    </div>
 
  )
}

export default Posts;