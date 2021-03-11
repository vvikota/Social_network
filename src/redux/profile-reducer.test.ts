import profileReducer, { actions } from "./profile-reducer";

let state = {
  posts: [
    {id: 1, message: 'First post!', likesCount: 1},
    {id: 2, message: 'Second post', likesCount: 3},
    {id: 3, message: 'My post', likesCount: 7},
  ],
  profile: null,
  status: ""
};

it('new post should be added', () => {
  let action = actions.addPostActionCreator('it-kamasutra.com');
  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(4);
});

it('text of new post should be correct', () => {
  let action = actions.addPostActionCreator('it-kamasutra.com');
  let newState = profileReducer(state, action);

  expect(newState.posts[3].message).toBe('it-kamasutra.com');
});

it('after deleting length of messages should be decrement', () => {
  let action = actions.deletePost(1);
  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});

it("after deleting length of messages shouldn't be decrement if id is incorrect", () => {
  let action = actions.deletePost(5);
  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});