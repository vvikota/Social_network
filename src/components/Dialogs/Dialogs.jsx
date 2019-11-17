import React from 'react';
import classes from './Dialogs.module.scss';
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return (
    <NavLink to={path} className={classes.dialog}>{props.name}</NavLink>
  )
}

const Message = (props) => {
  return (
  <div className={classes.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Petr" id="1"/>
        <DialogItem name="Petja" id="2"/>
        <DialogItem name="Kostik" id="3"/>
        <DialogItem name="Masha" id="4"/>
        <DialogItem name="Nina" id="5"/>
        <DialogItem name="Sveta" id="6"/>
      </div>
      <div className={classes.messages}>
        <Message message="Hello"/>
        <Message message="Hi"/>
        <Message message="How are you?"/>
        <Message message="I am fine"/>
        <Message message="I am too!"/>
        <Message message="That sounds good)"/>

      </div>
    </div>
  )
}

export default Dialogs;