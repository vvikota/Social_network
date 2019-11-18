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

  let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Hi'},
    {id: 3, message: 'How are you?'},
    {id: 4, message: 'I am fine'},
    {id: 5, message: 'I am too!'},
    {id: 6, message: 'That sounds good)'},
  ]

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
       
      </div>
      <div className={classes.messages}>
        <Message message={messagesData[0].message} id={messagesData[0].id}/>
        <Message message={messagesData[1].message} id={messagesData[1].id}/>
        <Message message={messagesData[2].message} id={messagesData[2].id}/>
        <Message message={messagesData[3].message} id={messagesData[3].id}/>
        <Message message={messagesData[4].message} id={messagesData[4].id}/>
        <Message message={messagesData[5].message} id={messagesData[5].id}/>
      </div>
    </div>
  )
}

export default Dialogs;