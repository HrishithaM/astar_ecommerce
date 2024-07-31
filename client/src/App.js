import './App.css';
import './index.css';
import { Profiler, useEffect, useState } from "react";
import Axios from "axios"; 

import React from 'react'
import NavBar from './components/Navbar/NavBar';
import Apparel from './components/Apparel/Apparel';
import About from './components/About/About';
import Home from './components/Home/Home';
import { Cart } from './components/Cart/Cart';
import {UserProfile} from './components/UserProfile/UserProfile';

export const App = () => {
  let component
  switch(window.location.pathname){
    case "/":
      component = <App/>
      break
    case "/Home":
      component = <Home/>
      break
    case "/About":
      component = <About/>
      break
    case "/Apparel":
      component = <Apparel/>
      break;
    case "/Cart":
      component = <Cart/>
      break;
    case "/UserProfile":
      component = <UserProfile/>
      break;
  }
  return (
    <>
      <div className='container'>
        <NavBar/>
        {component}
      </div>

   
      

    </>
  
  )
}

export default App;
/*function App() {
  const [ListOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post ("http://localhost:3001/createUser", {
      name, 
      age, 
      username,
    }).then ((response) => {
      setListOfUsers([...ListOfUsers, {
        name, 
        age, 
        username}])
    });
  };
///making a pull request !!
  return (
    <div className="App"> 
      <div className = "userDisplay">
        {ListOfUsers.map((user) => {
          return (
          <div> 
            <h1> Name: {user.name}</h1>
            <h1> Age: {user.age}</h1>
            <h1> Username: {user.username}</h1>
          </div>
          );
        })}
 
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button onClick={createUser}> Create User </button>
      </div>
    </div>
  );
}*/

 // Testing Hrishitha's Branch

