
import './stylesheets/application.scss';
import "bootstrap/dist/css/bootstrap.min.css"

import Purchase from "./components/Purchase"
import Login from "./components/User"
import NavMenu from "./components/Navbar"
import React,{useEffect} from 'react'

import {
  BrowserRouter as Router, 
  Routes, 
  Route,
  Navigate

} from "react-router-dom";

import {useState} from 'react';

const CustomWrapper = ({}) => {
  return ( sessionStorage.length==0 ? (
          <Navigate to="/purchases" />
        ) : (
          <Navigate to="/login" />
        )
  );
};



function App() {
  useEffect(() => {
    sessionStorage.clear()
  }, []);

  return (
    <div className='body'>
      <Router>
        <NavMenu/>
        <div className="App container">
          <Routes>
            <Route exact path="/" element={<CustomWrapper />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="/purchases" element={<Purchase/>} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;

