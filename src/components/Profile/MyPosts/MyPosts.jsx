import React from 'react';
import style from './MyPosts.module.css';

const posts = [
  {id: 1, message: 'Hi!', likesCount: 1},
  {id: 1, message: 'Hi, how are you?', likesCount: 3},
  {id: 1, message: 'Its my first post', likesCount: 7},
  {id: 1, message: 'Its cool!', likesCount: 11},
  {id: 1, message: 'Perfect', likesCount: 3},
];

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src="https://img09.rl0.ru/afisha/-x700/s1.afisha.net/MediaStorage/aa/8f/a06740b631464edaa4cf83768faa.jpg" alt="pic" className={style.ava} />
      {props.message}<br/>
      <span>Like: {props.like}</span>
    </div>
  )
};

const MyPosts = () => {

  let Posts = posts.map(el => <Post id = {el.id} message={el.message} like={el.likesCount}/>);

  return (
    <div>
      My posts
      <div>
        <textarea/>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        {Posts}
      </div>
    </div>
  )
};

export default MyPosts