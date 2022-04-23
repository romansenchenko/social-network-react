import store from './redux/redux-store';
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
          updateNewPostText={store.dispatch.bind(store)}
          newPostText={state.profilePage.newPostText}
          newMessageText={state.dialogsPage.newMessageText}
          dialogs={state.dialogsPage.dialogs}
          messages={state.dialogsPage.messages}
          posts={state.profilePage.posts} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  rerenderEntireTree(store.getState());
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
