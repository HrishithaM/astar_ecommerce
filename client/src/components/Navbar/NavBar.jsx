import React from 'react'
import './NavBar.css'
import astar_logo from '../../Assets/astar_logo.jpg'
import searchIcon from '../../Assets/search-b.png'
import cartIcon from '../../Assets/cart.png'
import userIcon from '../../Assets/userIcon.png'

export const NavBar = () => {
  return (
    <div className='navbar'>
        <a href ="/Home">
          <img src={astar_logo} alt="logo" className='logo'/>
        </a>
        <ul>
            <li> 
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href='/Apparel'>Apparel</a>
            </li>
            <li>
                <a href='/About'>About</a>
            </li>
        </ul>

        <div className='search'>
            <input type="text" placeholder='Search' />
            <img src={searchIcon} alt="search_icon" />
        </div>
        <a href='/Cart'>
          <img src={cartIcon} alt="cart_icon" className='cartImg' />
        </a>
        <a href='/UserProfile'>
          <img src={userIcon} alt="user_icon" className='userImg' />
        </a>
    </div>
  )
}


export default NavBar
