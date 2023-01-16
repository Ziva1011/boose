
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
  console.log(sessionStorage)
  return ( sessionStorage ? (
          <Navigate to="/purchases" />
        ) : (
          <Navigate to="/login" />
        )
  );
};



function App() {

const [user,setLoginUser] = useState({  })

  return (
    <div >
      <Router>
        <NavMenu/>
        <div className="App container">
          <Routes>
            <Route exact path="/" element={<CustomWrapper user={user}/>} />
            <Route exact path="/login" element={<Login setLoginUser={setLoginUser}/>} />
            <Route path="/purchases" element={<Purchase props={user}/>} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;

