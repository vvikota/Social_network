import React, {Component} from 'react';
import {compose} from "redux";
import { Switch, Route, withRouter, BrowserRouter, Redirect } from "react-router-dom";
import { connect, Provider } from 'react-redux';
import './App.css';
import {initializeApp} from './redux/app-reducer';
import store from './redux/redux-store';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader.jsx";


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
          <Switch>
            <Route exact path='/' render={() => <Redirect to={"/profile"} />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/users' render={() => <UsersContainer pageTitle={"Samurais"}/> }/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
            <Route path='/login' render={() => <Login/>}/>
            <Route path='*' render={() => <div> 404 NOT FOUND </div>} />
          </Switch>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);

const SamuraiJSApp = () => {
  return  <BrowserRouter>
            <Provider store={store}>
              <AppContainer />
            </Provider>
          </BrowserRouter>
}

export default SamuraiJSApp;
