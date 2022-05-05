import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/profile/:userId' element={<ProfileContainer />} />
          <Route path='/profile/' element={<ProfileContainer />} />
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
