import React from 'react';
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  let state = props.store.getState().messagesPage;

  let sendMessage = () =>{
    props.store.dispatch(sendMessageCreator())
  };

  let onNewMessageChange= (body) =>{
    props.store.dispatch(updateNewMessageCreator(body));
  };

  return <Dialogs updateNewMessageBody={onNewMessageChange}
                  sendMessage={sendMessage}
                  messagesPage={state}
  />
};

export default DialogsContainer;