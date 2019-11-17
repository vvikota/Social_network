import React from 'react';
import Post from './Post/Post';
import classes from './Posts.module.scss';


const Posts = () => {

  return (
    <div className={classes.postBlock}>
      <h3>Posts block</h3>
      <div>
        <textarea cols="30" rows="3"></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.content}>
        <Post message='Hi, how are you?' likes='12'/>
        <Post message='I am fine, what about you?' likes='11'/>
        <Post message='I am too fine' likes='6'/>
        <Post message='How about go to the cinema tomorrow?' likes='8'/>
        <Post message='Its a great idea' likes='5'/>
      </div>
    </div>
 
  )
}

export default Posts;