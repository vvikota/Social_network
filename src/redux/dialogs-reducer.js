
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

  switch(action.type){
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      }

    case SEND_MESSAGE: {

      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 7, message: body}]
      };
    }
    default: return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE});
export const updateNewMessageCreator = (body) => (
  {type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;