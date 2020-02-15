import React from 'react';
import './App.css';
import Header from './components/Header.jsx'
import Navigation from './components/Navigation'


const App = () => {
  return (
      <div className='app-wrapper'>
        <Header/>
        <nav className='nav'>
          <div>Profile</div>
          <div>Messages</div>
          <div>News</div>
          <div>Music</div>
          <div>Settings</div>
        </nav>

        <div className="content">
          <img src="https://kogdakotika.net/media/post_images/title_page_m_ChtRYfI.jpg" alt="beach"/>
        </div>
        
      </div>
  )
};

export default App;
