import React from 'react';
import classes from './Dialogs.module.scss';

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog  + ' ' + classes.active}>Vasja</div>
        <div className={classes.dialog}>Petja</div>
        <div className={classes.dialog}>Kostik</div>
        <div className={classes.dialog}>Masha</div>
        <div className={classes.dialog}>Nina</div>
        <div className={classes.dialog}>Sveta</div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>Hello! How about cinema</div>
        <div className={classes.message}>I like cinema</div>
      </div>
    </div>
  )
}

export default Dialogs;