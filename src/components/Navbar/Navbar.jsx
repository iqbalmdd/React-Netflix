import React from 'react'
import DarkMode from '../DarkMode/DarkMode'
import "./Navbar.css"
import Fire from "../../assets/images/fire.png"
import Star from "../../assets/images/glowing-star.png"
import Party from "../../assets/images/partying-face.png"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>Bale Movie</h1>
        <div className="navbar_links">
            <DarkMode />
            <a href="#popular">
                Popular
                <img className='navbar_emoji' src={Fire} alt="fire emoji" />
            </a>
            <a href="#top_rated">
                Top Rated
                <img className='navbar_emoji' src={Star} alt="star emoji" />
            </a>
            <a href="#upcoming">
                Upcoming
                <img className='navbar_emoji' src={Party} alt="party emoji" />
            </a>
        </div>
    </nav>
  )
}

export default Navbar