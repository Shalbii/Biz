import React from 'react';
import ReactDOM from 'react-dom/client';
//import Navigation from './Navigation';
//import Login from './components/List';
//import Array from './Array';
import Dgraph from './Dgraph';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dgraph/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
