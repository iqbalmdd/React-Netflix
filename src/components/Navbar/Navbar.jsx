import React from "react";
import DarkMode from "../DarkMode/DarkMode";
import "./Navbar.css";
import Search from "../../assets/images/search.png";
import Profile from "../../assets/images/SAYA.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav_left">
        <h1>BaleMovie</h1>
        <div className="navbar_links">
          
          <a href="#popular">Popular</a>
          <a href="#top_rated">Top Rated</a>
          <a href="#upcoming">Upcoming</a>
        </div>
      </div>
      <div className="nav-right align_center">
        <DarkMode />
        <img className="search_image" src={Search} alt="" />
        <img className="profile_image" src={Profile} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
