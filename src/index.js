import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => { 
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App 
          state={state}
          dispatch={store.dispatch.bind(store)}
          store={store}

          addPost={store.dispatch.bind(store)}
          newPostText={store._state.profilePage.newPostText}
          newMessageText={store._state.dialogsPage.newMessageText}
          updateNewPostText={store.dispatch.bind(store)}
          dialogs={store._state.dialogsPage.dialogs}
          messages={store._state.dialogsPage.messages}
          posts={store._state.profilePage.posts} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
