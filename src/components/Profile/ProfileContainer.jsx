import React from 'react';
import Profile from "./Profile";
import { connect } from 'react-redux';
import {getStatus, getUserProfile, updateStatus} from '../../redux/profile-reducer'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    let userId = this.props.match.params.userId; 
    if(!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
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

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

export default compose(
<<<<<<< HEAD
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus}),
=======
  connect(mapStateToProps, { getUserProfile}),
>>>>>>> b44a236aad59e5ac757ad375f72e065414c37ece
  withRouter,
  withAuthRedirect
)(ProfileContainer)