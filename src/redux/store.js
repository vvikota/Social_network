import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi!', likesCount: 1},
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 1, message: 'Its my first post', likesCount: 7},
        {id: 1, message: 'Its cool!', likesCount: 11},
        {id: 1, message: 'Perfect', likesCount: 3}
      ],
      newPostText: 'it-kamasutra.com'
    },
    messagesPage: {
      dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Max'},
        {id: 3, name: 'Alena'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Kent'},
        {id: 6, name: 'Bill'}
      ],
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Go'}
      ],
      newMessageBody:""
    },
  },
  _callSubscriber() {
    console.log('change');
  },

  getState(){
    return this._state;
  },
  
  subscribe(observer){
    this._callSubscriber = observer;
  },

  dispatch(action){
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

    this._callSubscriber(this._state);
  }
};

export default store;
window.store = store;
