import React from 'react';
import Post from './Post/Post';
import classes from './Posts.module.scss';


const Posts = () => {
  
  let postData = [
    {id: 1, message: 'Hi, how are you?', likes: 12 },
    {id: 2, message: 'I am fine, what about you?', likes: 13},
    {id: 3, message: 'I am too fine', likes: 11},
    {id: 4, message: 'How about go to the cinema tomorrow?', likes: 2},
    {id: 5, message: 'Its a great idea', likes: 120},
    {id: 1, message: 'Hi, how are you?', likes: 12 },
  ]
  
  let postElement = postData.map(post => 
    <Post message={post.message} id={post.id} likes={post.likes}/>
  )

  return (
    <div className={classes.postBlock}>
      <h3>Posts block</h3>
      <div>
        <textarea cols="30" rows="3"></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.content}>
        {postElement}
      </div>
    </div>
 
  )
}

export default Posts;