import React from 'react';
import Profile from "./Profile";
import { connect } from 'react-redux';
import {getStatus, getUserProfile, updateStatus} from '../../redux/profile-reducer'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    const {
      match,
      authorizedUserId,
      history,
      getUserProfile,
      getStatus
    } = this.props;

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

  render(){
    return(
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
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
    getUserProfile, getStatus, updateStatus
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)