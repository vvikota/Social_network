
let state = {
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
    ]
  }
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
};

export default state;