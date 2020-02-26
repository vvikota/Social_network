import React from 'react';
import style from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src="https://img09.rl0.ru/afisha/-x700/s1.afisha.net/MediaStorage/aa/8f/a06740b631464edaa4cf83768faa.jpg" alt="pic" className={style.ava} />
      {props.message}<br/>
      <span>Like: {props.like}</span>
    </div>
  )
};

const MyPosts = (props) => {
  let Posts = props.posts.map(el => <Post id = {el.id}
                                          message={el.message}
                                          like={el.likesCount}
                                    />);
  let newPostElement = React.createRef();


  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div>
      My posts
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={style.posts}>
        {Posts}
      </div>
    </div>
  )
};

export default MyPosts