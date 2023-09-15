import React from "react";
import { BsSearch, BsPlayCircle } from "react-icons/bs";
import { GiTomato } from "react-icons/gi";
import { TbMenu } from "react-icons/tb";

const Nav = () => {
  return (
    <>
      <div className="nav_content">
        <div className="background_image">
          <img
            className="background_image"
            src="images/background.jpg"
            alt="background-image"
          />
        </div>
        <div className="nav-bar">
          <div className="col-3">
            <img className="logo" src="images/logo.jpg" alt="logo" />
            <h3>MovieBox</h3>
          </div>
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
        <div className="movie-details">
          <h1 className="movie-title">John Wick 3 : Parabellum</h1>
          <div className="movie-rating">
            <img
              src="images/imdb.jpg"
              alt="imdb"
              className="movie-rating-image"
            />
            <h6>86.0/100</h6>
            <GiTomato color="red" size/>
          </div>
          <h4 className="movie-desc">
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </h4>
          <button className="movie-btn">
            <BsPlayCircle size="17" className="play-btn" />
            <h4>WATCH TRAILER</h4>
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
