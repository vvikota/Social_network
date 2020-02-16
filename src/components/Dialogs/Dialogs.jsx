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
    <div className={style.message}>{props.message}</div>
  )
};

const Dialogs = () => {

  let DialogsData = [
    {id: 1, name: 'Dimuch'},
    {id: 2, name: 'Max'},
    {id: 3, name: 'Alena'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Kent'},
    {id: 6, name: 'Bill'}
  ];

  let DialogItems = DialogsData.map( el => <DialogItem name={el.name} id={el.id}/>);

  let MessageData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'How are you'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Go'}
  ];

  let Messages = MessageData.map(el => <Message id={el.id} message={el.message}/>);

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        {DialogItems}
      </div>
      <div className={style.messages}>
        {Messages}
      </div>

    </div>
  )
};

export default Dialogs