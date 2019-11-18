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
  ]

  return (
    <div className={classes.postBlock}>
      <h3>Posts block</h3>
      <div>
        <textarea cols="30" rows="3"></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.content}>
        <Post message={postData[0].message} id={postData[0].id} likes={postData[0].likes}/>
        <Post message={postData[1].message} id={postData[1].id} likes={postData[1].likes}/>
        <Post message={postData[2].message} id={postData[2].id} likes={postData[2].likes}/>
        <Post message={postData[3].message} id={postData[3].id} likes={postData[3].likes}/>
        <Post message={postData[4].message} id={postData[4].id} likes={postData[4].likes}/>
      </div>
    </div>
 
  )
}

export default Posts;