import React from 'react';
import style from './Dialogs.module.css';
import {NavLink ,Redirect} from "react-router-dom";
import {Field, reduxForm} from 'redux-form'; 

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

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
      <button>Send</button>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogaddMessageForm'})(AddMessageForm)

export default Dialogs
