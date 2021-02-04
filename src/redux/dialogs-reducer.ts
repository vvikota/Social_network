const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}

let initialState = {
  dialogs: [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Max'},
    {id: 3, name: 'Alena'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Kent'},
    {id: 6, name: 'Bill'}
  ] as Array<DialogType>,
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'How are you'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Go'}
  ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

type sendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE
  newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): sendMessageCreatorActionType => ({ type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;