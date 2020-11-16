const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    {id: 1, message: 'Hi!', likesCount: 1},
    {id: 1, message: 'Hi, how are you?', likesCount: 3},
    {id: 1, message: 'Its my first post', likesCount: 7},
    {id: 1, message: 'Its cool!', likesCount: 11},
    {id: 1, message: 'Perfect', likesCount: 3}
  ],
  newPostText: 'React samurai',
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }

    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }

    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }

    default:
      return state;

  }
};

export const addPostActionCreator = () => ({ type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => (
  {type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});  

export default profileReducer;