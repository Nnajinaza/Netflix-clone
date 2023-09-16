import React from "react";
import { BsSearch, BsPlayCircle } from "react-icons/bs";
import { GiTomato } from "react-icons/gi";
import { TbMenu } from "react-icons/tb";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav_content">
        <div className="nav-bar">
          <Link to="/" className="col-3">
            <img className="logo" src="images/logo.jpg" alt="logo" />
            <h3>MovieBox</h3>
          </Link>
          <div className="search-bar">
            <input
              placeholder="What do you want to watch? "
              type="text"
              className="search-input"
              color="blue"
            />
            <BsSearch className="searchicons" color="white" size="14" />
          </div>
          <div className="nav_profile">
            <h4>Sign in</h4>
            <div
              class="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
              size="1"
            ></div>
            <TbMenu className="option-icon" color="white" size="12" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
