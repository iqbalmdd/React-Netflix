import React, { useState } from "react";
import DarkMode from "../DarkMode/DarkMode";
import "./Navbar.css";
import Search from "../../assets/images/search.png";
import Profile from "../../assets/images/SAYA.jpg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#popular");
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleClick = (id) => {
    setActiveLink(id);
  };

  return (
    <nav className="navbar">
      <div className="nav_left">
        <h1>BaleMovie</h1>
        <div className="navbar_links">
          <a
            href="#popular"
            onClick={() => handleClick("#popular")}
            className={activeLink === "#popular" ? "active" : ""}
          >
            Popular
          </a>
          <a
            href="#top_rated"
            onClick={() => handleClick("#top_rated")}
            className={activeLink === "#top_rated" ? "active" : ""}
          >
            Top Rated
          </a>
          <a
            href="#upcoming"
            onClick={() => handleClick("#upcoming")}
            className={activeLink === "#upcoming" ? "active" : ""}
          >
            Upcoming
          </a>
        </div>
      </div>
      <div className="nav-right align_center">
        <DarkMode />
        {showSearchBar && (
          <div className="search_bar">
            <input type="text" placeholder="Search..." />
          </div>
        )}
        <img
          className="search_image"
          src={Search}
          alt=""
          onClick={toggleSearchBar}
        />
        <img className="profile_image" src={Profile} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
