import React, { useEffect, useState } from 'react';
import style from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {
  
  let [editMode, setEditMode ] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(()=> {
      setStatus(props.status);
    }, [props.status]
  )

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return(
    <div className={style.statusContainer}>
      { !editMode ?
        <span onDoubleClick={activateEditMode}>
          {props.status || "-----------"}
        </span> : 
        <input 
          autoFocus={true}
          onBlur={deactivateEditMode}
          onChange={onStatusChange}
          value={status}
        />
      }

        
    </div>
  )
}

export default ProfileStatusWithHooks;