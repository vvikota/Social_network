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
};

const dialogsReducer = (state = initialState, action) => {

  switch(action.type){
    case SEND_MESSAGE: {

      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: 7, message: body}]
      };
    }
    default: return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody});;

export default dialogsReducer;