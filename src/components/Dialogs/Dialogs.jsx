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

  let dialogsData = [
    {id: 1, name: 'Petr'},
    {id: 2, name: 'Petja'},
    {id: 3, name: 'Kostik'},
    {id: 4, name: 'Masha'},
    {id: 5, name: 'Nina'},
    {id: 6, name: 'Sveta'},
  ]

  let dialogItems = dialogsData.map( dialog => 
    <DialogItem name={dialog.name} id={dialog.id}/>
  )

  let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Hi'},
    {id: 3, message: 'How are you?'},
    {id: 4, message: 'I am fine'},
    {id: 5, message: 'I am too!'},
    {id: 6, message: 'That sounds good)'},
  ]

  let messageItem = messagesData.map( message =>
    <Message message={message.message} id={message.id}/>
  )

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogItems}
      </div>
      <div className={classes.messages}>
        {messageItem}
      </div>
    </div>
  )
}

export default Dialogs;