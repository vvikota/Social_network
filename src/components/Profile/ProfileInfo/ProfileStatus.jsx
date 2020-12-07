import React from 'react';
import style from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  toggleEditMode() {
    this.setState({
      editMode: !this.state.editMode
    })
  };

  render(){
    return(

      <div className={style.statusContainer}>
        <div>
          {!this.state.editMode ?
            <span onDoubleClick={this.toggleEditMode.bind(this)}>{this.props.status}</span> :
            <input autoFocus={true} onBlur={this.toggleEditMode.bind(this)} value={this.props.status} />
          }
        </div>
      </div>
    )
  }
}

export default ProfileStatus;