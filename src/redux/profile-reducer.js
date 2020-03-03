const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, message: 'Hi!', likesCount: 1},
    {id: 1, message: 'Hi, how are you?', likesCount: 3},
    {id: 1, message: 'Its my first post', likesCount: 7},
    {id: 1, message: 'Its cool!', likesCount: 11},
    {id: 1, message: 'Perfect', likesCount: 3}
  ],
  newPostText: 'React samurai'
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;

  }
};

export const addPostActionCreator = () => ({ type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => (
  {type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;