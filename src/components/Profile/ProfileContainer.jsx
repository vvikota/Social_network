import React from 'react';
import Profile from "./Profile";
import { connect } from 'react-redux';
import {getStatus, getUserProfile, updateStatus, savePhoto} from '../../redux/profile-reducer'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
  
  refreshProfile(){
    const {match, authorizedUserId, history, getUserProfile, getStatus} = this.props;

    let userId = match.params.userId; 
    if(!userId) {
      userId = authorizedUserId;
      if(!userId){
        history.push("/login");
      }
    }
    getUserProfile(userId);
    getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.match.params.userId != prevProps.match.params.userId){
      this.refreshProfile();
    }
  }

  render(){
    console.log(this.props)
    return(
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
  });
}

export default compose(
  connect(mapStateToProps, { 
    getUserProfile, getStatus, updateStatus, savePhoto
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)