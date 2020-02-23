let store = {
  _state: {
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
      ]
    },
    profilePage: {
      posts: [
        {id: 1, message: 'Hi!', likesCount: 1},
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 1, message: 'Its my first post', likesCount: 7},
        {id: 1, message: 'Its cool!', likesCount: 11},
        {id: 1, message: 'Perfect', likesCount: 3}
      ],
      newPostText: 'it-kamasutra.com'
    }
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
    if(action.type === 'ADD-POST'){
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }

};

export default store;
window.store = store;