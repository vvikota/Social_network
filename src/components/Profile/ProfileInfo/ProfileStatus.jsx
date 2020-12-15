import React from 'react';
import style from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
  // statusInputRef = React.createRef()
  
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }

  // toggleEditMode = () => {
  //   // debugger;
  //   this.setState({
  //     editMode: !this.state.editMode
  //   })
  //   this.props.updateStatus(this.state.status);
  // };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    });
  }

  render(){
    return(
      <div className={style.statusContainer}>
        <div>
          {!this.state.editMode ?
            <span onDoubleClick={this.activateEditMode}>
                {this.props.status || 'no status'}
            </span> :
            <input
              // ref={this.statusInputRef}
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
          }
        </div>
      </div>
    )
  }
}

export default ProfileStatus;