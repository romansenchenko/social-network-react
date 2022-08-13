import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux'; 
import Preloader from './components/common/Preloader/Preloader';
import { AppStateType } from './redux/redux-store';
import { UsersPage } from './components/Users/UsersContainer';
import { LoginPage } from './components/Login/Login';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {

  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    console.error(e);
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<Navigate to="/profile" />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/profile/:userId' element={<ProfileContainer />} />
              <Route path='/profile/' element={<ProfileContainer />} />
              <Route path='/users' element={<UsersPage pageTitle={'Самурай'} />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/chat' element={<ChatPage />} />
              <Route path='*' element={<NotFoundPage404 />} />
            </Routes>
          </Suspense> 
        </div>
      </div>
    );
  }
}

const NotFoundPage404 = () => {
  return <h2>404 NOT FOUND</h2>
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

export default compose<React.ComponentType>(
  connect(mapStateToProps, { initializeApp }))(App);
