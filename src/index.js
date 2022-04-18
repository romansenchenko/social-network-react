import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: "Вау", likesCount: 111 },
  { id: 1, message: "Моё первое сообщение!", likesCount: 111 },
  { id: 2, message: "Мое 2 сообщение.", likesCount: 11 },
  { id: 3, message: "%-)", likesCount: 1 }
]

let dialogs = [
  { id: 1, name: "Д има" },
  { id: 2, name: "Света" },
  { id: 3, name: "Саша" },
  { id: 4, name: "Оля" },
  { id: 5, name: "Андрей" },
  { id: 6, name: "Вадим" }
]

let messages = [
  { id: 1, messages: "П ривет!" },
  { id: 2, messages: "Как дела?" },
  { id: 3, messages: "Что делаешь?" }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
