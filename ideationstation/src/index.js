import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Stars from './Stars';
import Modal from './Modal';
import FilterTag from './FilterTag';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilterTag></FilterTag>
    <Modal currId = "1" currThought="Test" currTag="Art"></Modal>
    <Stars></Stars>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
