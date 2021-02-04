import React from 'react';
import Profile from "./Profile";
import { connect } from 'react-redux';
import {getStatus, getUserProfile, updateStatus, savePhoto, saveProfile} from '../../redux/profile-reducer'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import { ProfileType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";


type MapStatePropsType = {
  profile: null | ProfileType
  status: string
  authorizedUserId: null | number
  isAuth: boolean
}

type MapDispatchPropsType = {
  getUserProfile: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: (status: string) => void
  savePhoto: (file: any) => void
  saveProfile: (profile: ProfileType) => void
}

type OwnPropsType = {
  match: any
  history: any
}

type PropsType = MapDispatchPropsType & MapStatePropsType & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
  
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

  componentDidUpdate(prevProps: PropsType) {
    if(this.props.match.params.userId !== prevProps.match.params.userId){
      this.refreshProfile();
    }
  }

  render(){
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

let mapStateToProps = (state: AppStateType) => {
  return ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
  });
}

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps, { 
      getUserProfile, getStatus, updateStatus, savePhoto, saveProfile
    }
  ),
  withRouter,
  withAuthRedirect
)(ProfileContainer)