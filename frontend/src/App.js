
import './App.css';
import Purchase from "./components/Purchase"
import Login from "./components/User"
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

