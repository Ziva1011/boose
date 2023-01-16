
import './stylesheets/application.scss';
import "bootstrap/dist/css/bootstrap.min.css"

import Purchase from "./components/Purchase"
import Login from "./components/User"
import NavMenu from "./components/Navbar"

import {
  BrowserRouter as Router, 
  Routes, 
  Route,
  Navigate

} from "react-router-dom";

import {useState} from 'react';

const CustomWrapper = ({ user=user}) => {


  return ( user && user._id ? (
          <Navigate to="/purchases" />
        ) : (
          <Navigate to="/login" />
        )
  );
};



function App() {

const [user,setLoginUser] = useState({  })

  return (
    <div className="App">
      <NavMenu/>
      <Router>
        <Routes>
          <Route exact path="/" element={<CustomWrapper user={user}/>} />
          <Route exact path="/login" element={<Login setLoginUser={setLoginUser}/>} />
          <Route path="/purchases" element={<Purchase props={user}/>} />
        </Routes>

        </Router>

    </div>
  );
}

export default App;

