import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/state";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={style.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
};

const Message = (props) => {
  return(
    <div >{props.message}</div>
  )
};

const Dialogs = (props) => {

  let state = props.store.getState().messagesPage;

  let DialogItems = state.dialogs.map( el => <DialogItem name={el.name} id={el.id}/>);
  let Messages = state.messages.map(el => <Message id={el.id} message={el.message}/>);
  let newMessageBody = state.newMessageBody;

  let sendMessage = () =>{
    props.store.dispatch(sendMessageCreator())
  };

  let onNewMessageChange= (event) =>{
    let body = event.target.value;
    props.store.dispatch(updateNewMessageCreator(body));
  };

  return (
    <div className={style.dialogs}>
      <div >
        {DialogItems}
      </div>
      <div >
        {Messages}
      </div>

      <div>
        <div><textarea
          placeholder='Enter your message'
          value={newMessageBody}
          onChange={onNewMessageChange}
         /></div>
        <div><button onClick={sendMessage}>Send</button></div>
      </div>

    </div>
  )
};

export default Dialogs