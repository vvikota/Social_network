import React from 'react';
import style from './MyPosts.module.css';

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

  let Posts = props.posts.map((el, index) => <Post id = {el.id}
                                                             message={el.message}
                                                             like={el.likesCount}
                                                             key={index}
                                                           />);
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (

    <div>
      My posts
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>

        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={style.posts}>
        {Posts}
      </div>
    </div>

  )
};

export default MyPosts
