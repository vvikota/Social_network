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

  let DialogItems = props.dialogsData.map( el => <DialogItem name={el.name} id={el.id}/>);
  let Messages = props.messageData.map(el => <Message id={el.id} message={el.message}/>);

  return (
    <div className={style.dialogs}>
      <div >
        {DialogItems}
      </div>
      <div >
        {Messages}
      </div>

    </div>
  )
};

export default Dialogs