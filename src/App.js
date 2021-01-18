import React, {Component} from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import { connect } from 'react-redux';
// import { getAuthUserData} from './redux/auth-reducer';
import {initializeApp} from './redux/app-reducer';
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Preloader from "./components/common/Preloader/Preloader.jsx";
// import { getAuthUserData, logout } from '../../redux/auth-reducer';

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render (){
    if(!this.props.initialized) {
      return <Preloader />  
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/users' render={() => <UsersContainer /> }/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
          <Route path='/login' render={() => <Login/>}/>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default compose (
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);
