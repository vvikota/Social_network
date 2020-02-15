import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea name="text" id="" cols="50" rows="5"/>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        <Post message='Hi, how are you?' like='5'/>
        <Post message='Its my first post' like='10'/>
        <Post message='Its cool!' like='13'/>
      </div>
    </div>
  )
};

export default MyPosts