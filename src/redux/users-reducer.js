
const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const photoUrl = "https://i.pinimg.com/474x/a3/7f/b6/a37fb62e44a4ee7d9d0e04b79471018a.jpg";

let initialState = {
  users: [
    {id: 1, photoURL: photoUrl, followed: true, fullName: 'Dmitriy', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
    {id: 2,photoURL: photoUrl, followed: true, fullName: 'Viktor', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
    {id: 3,photoURL: photoUrl, followed: false, fullName: 'Petr', status: 'cleaner', location: {city: 'Miory', country: 'Belarus'}},
    {id: 4,photoURL: photoUrl, followed: false, fullName: 'Anastasiya', status: 'econoomist', location: {city: 'Minsk', country: 'Belarus'}},
    {id: 5,photoURL: photoUrl, followed: true, fullName: 'olga', status: 'secretary', location: {city: 'Borisov', country: 'Belarus'}},
    {id: 6,photoURL: photoUrl, followed: false, fullName: 'Vadim', status: 'driver', location: {city: 'Grodno', country: 'Belarus'}},
  ]
};

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if(user.id === action.userId){
            return {...user, followed: !user.followed}
          }
          return user;
        })
      }
    case SET_USERS: {
      return {...state, users: [...state.users, ...action.users]}
    }
    default: return state;
  }
}

export const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW, userId})
export const setUserAC = (users) => ({type: SET_USERS, users})

export default usersReducer;