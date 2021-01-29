import React, {Component} from 'react';
import style from './MyPosts.module.css';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormControls';
import Post from './Post/Post';

const maxLength10 = maxLengthCreator(10);

class MyPosts extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props || nextState !== this.state;
  }

  render(){
    const {posts, addPost} = this.props

    let Posts = posts.map((el, index) =>
    <Post
      id = {el.id}
      message={el.message}
      like={el.likesCount}
      key={index}
    />);

    let onAddPost = (values) => {
      addPost(values.newPostText);
    }

    return (
      <div className={style.myPosts}>
        <AddNewPostForm onSubmit={onAddPost}/>
        {Posts}
      </div>
    )
  }
};

let AddNewPostForm = (props) => {
  return (
    <form className={style.newPostblock} onSubmit={props.handleSubmit}>
      <Field 
        name="newPostText"
        component={Textarea}
        validate={[required, maxLength10]}
        placeholder="Post text"
      />
      <button>Add post</button>
    </form>
  )
}

AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;
