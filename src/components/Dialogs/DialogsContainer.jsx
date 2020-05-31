// import React from 'react';
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import connect from "react-redux/lib/connect/connect";


let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
};

let mapDispatchToProps = (dispatch) =>{
  return {
    updateNewMessageBody: () => {
      dispatch(sendMessageCreator());
    },
    sendMessage: (body) => {
      dispatch(updateNewMessageCreator(body));
    }
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
