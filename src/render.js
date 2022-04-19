import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, updateNewPostText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
  
export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App addPost={addPost} newPostText={state.profilePage.newPostText} updateNewPostText={updateNewPostText} dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} posts={state.profilePage.posts} />
      </BrowserRouter>
    </React.StrictMode>
  );
}