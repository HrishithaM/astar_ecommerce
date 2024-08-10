import React from 'react';
import './NavBar.css';
import astar_logo from '../../Assets/astar_logo.jpg';
import searchIcon from '../../Assets/search-b.png';
import cartIcon from '../../Assets/cart.png';
import userIcon from '../../Assets/userIcon.png';

const NavBar = () => {
  const navigateTo = (path) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <div className='navbar'>
      <div onClick={() => navigateTo('/Home')} className='logo'>
        <img src={astar_logo} alt="logo" />
      </div>
      <ul>
        <li>
          <div onClick={() => navigateTo('/Home')}>Home</div>
        </li>
        <li>
          <div onClick={() => navigateTo('/Products')}>Products</div>
        </li>
        <li>
          <div onClick={() => navigateTo('/About')}>About</div>
        </li>
      </ul>

      <div className='search'>
        <input type="text" placeholder='Search' />
        <img src={searchIcon} alt="search_icon" />
      </div>
      <div onClick={() => navigateTo('/Cart')}>
        <img src={cartIcon} alt="cart_icon" className='cartImg' />
      </div>
      <div onClick={() => navigateTo('/UserProfile')}>
        <img src={userIcon} alt="user_icon" className='userImg' />
      </div>
    </div>
  );
}

export default NavBar;