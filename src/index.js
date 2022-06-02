import React, { Component }  from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import './index.css';
import App from './App';
import Connector from './pages/Connector'
import reportWebVitals from './reportWebVitals';

import NavigationComponent from './components/NavigationComponent'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <NavigationComponent/>
      <Routes>
        <Route exact path="/test" element={<Connector/>} />
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
