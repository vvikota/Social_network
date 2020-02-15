import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea name="text" id="" cols="50" rows="5"></textarea>
        <button>Add post</button>
      </div>
    <div className={style.posts}>
      <Post/>
      <Post/>
      <Post/>
    </div>
    </div>
  )
}

export default MyPosts