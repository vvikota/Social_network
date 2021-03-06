import React from 'react';
import style from './Dialogs.module.css';
import {NavLink ,Redirect} from "react-router-dom";
import {AddMessageFormRedux} from "./AddMessageForm";

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

  let DialogItems = state.dialogs.map( (el, i) =>
    <DialogItem name={el.name} id={el.id} key={i}/>);

  let Messages = state.messages.map((el, i) =>
    <Message id={el.id} message={el.message} key={i}/>);

  const addNewMessage = (formData) => {
    props.sendMessage(formData.newMessageBody)
  }

  if(!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={style.dialogs}>
      <div >
        {DialogItems}
      </div>
      <div >
        {Messages}
      </div>

      <AddMessageFormRedux onSubmit={addNewMessage} />

    </div>
  )
};

export default Dialogs
