import './App.css';
import './index.css';
import Axios from "axios"; 
import React, { useState, useEffect } from 'react';
import NavBar from './components/Navbar/NavBar';
import Products from './components/Products/Products';
import About from './components/About/About';
import Home from './components/Home/Home';
import { Cart } from './components/Cart/Cart';
import { UserProfile } from './components/UserProfile/UserProfile';

export const App = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);

    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  let component;
  switch (path) {
    case "/":
    case "/Home":
      component = <Home />;
      break;
    case "/About":
      component = <About />;
      break;
    case "/Products":
      component = <Products />;
      break;
    case "/Cart":
      component = <Cart />;
      break;
    case "/UserProfile":
      component = <UserProfile />;
      break;
    default:
      component = <Home />; // default to Home or a 404 component
  }

  return (
    <div className='container'>
      <NavBar />
      {component}
    </div>
  );
}

export default App;