import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div>
      My posts
      <div>
        <textarea ref={newPostElement}/>
        <button onClick={addPost}>Add post</button>
      </div>
      ds
      <div className={style.posts}>
        {/*вынести данные в стейт*/}
        <Post message='Hi, how are you?' like='5'/>
        <Post message='Its my first post' like='10'/>
        <Post message='Its cool!' like='13'/>
      </div>
    </div>
  )
};

export default MyPosts