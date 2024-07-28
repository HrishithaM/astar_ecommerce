import React from 'react'
import './NavBar.css'
import astar_logo from '../../Assets/astar_logo.jpg'
import searchIcon from '../../Assets/search-b.png'
import cartIcon from '../../Assets/cart.png'
import userIcon from '../../Assets/userIcon.png'

export const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={astar_logo} alt="logo" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Apparel</li>
            <li>About</li>
        </ul>

        <div className='search'>
            <input type="text" placeholder='Search' />
            <img src={searchIcon} alt="search_icon" />
        </div>

        <img src={cartIcon} alt="cart_icon" className='cartImg' />
        <img src={userIcon} alt="user_icon" className='userImg' />
    </div>
  )
}


export default NavBar
