import React from 'react';
import style from './MyPosts.module.css';
import {Field, reduxForm} from 'redux-form';

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

  let Posts = props.posts.map((el, index) =>
    <Post
      id = {el.id}
      message={el.message}
      like={el.likesCount}
      key={index}
    />);
  // let newPostElement = React.createRef();

  // let onAddPost = () => {
  //   props.addPost();
  // };

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (

    <div className={style.myPosts}>
     <AddNewPostForm onSubmit={onAddPost}/>
      <div className={style.posts}>
        {Posts}
      </div>
    </div>
  )
};

let AddNewPostForm = (props) => {
  return (
    <form className={style.newPostblock} onSubmit={props.handleSubmit}>
      <Field name="newPostText" component="textarea" />
      <button>Add post</button>
    </form>
  )
}

AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;
