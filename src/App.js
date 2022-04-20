import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs/*' element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />
          <Route path='/profile' element={<Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
              
              addPost={props.addPost}
              posts={props.posts}
              updateNewPostText={props.updateNewPostText}
              newPostText = {props.newPostText}
            />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
