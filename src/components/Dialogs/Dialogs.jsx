import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

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

  let state = props.messagesPage;

  let DialogItems = state.dialogs.map( (el, i) => <DialogItem name={el.name} id={el.id} key={i}/>);
  let Messages = state.messages.map((el, i) => <Message id={el.id} message={el.message} key={i}/>);
  let newMessageBody = state.newMessageBody;

  let sendMessage = () =>{
    props.sendMessage();
  };

  let onNewMessageChange= (event) =>{
    let body = event.target.value;
    props.updateNewMessageBody(body);
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
