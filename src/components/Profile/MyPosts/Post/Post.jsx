import React from 'react';
import style from './Post.module.css';

const Posts = (props) => {
  return (
    <div className={style.item}>
      <img
        src="https://lh3.googleusercontent.com/proxy/0THBbs6lQg-yPcCwHpWfV1ZMM5jeWLoVuHSvDdc5mdGowqY8GTJPx-ZjnCjcBJt6vIeTJqKbqjzeasxSboXYZ0eESZy7ISPq4dWY9mMhghK0"
        alt="pic" className={style.ava}/>
      {props.message}
      <span>Like: {props.like}</span>
    </div>
  )
}

export default Posts

