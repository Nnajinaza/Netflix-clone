import React from "react";
import { BsCamera, BsHouse, BsTv } from "react-icons/bs";
import "./MoviePage.css";

function MoviePage({ movieImageUrl, movieTitle, movieReleaseDate }) {
  return (
    <div>
      <div className="rectangle-bar">
        <div className="logo-moviebox">
          <img src="images/logo.jpg" alt="logo " />
          <h4 className="movie">MovieBox</h4>
        </div>
        <div className="home-option">
          <BsHouse />
          <p>Home</p>
        </div>
        <div className="home-option">
          <BsCamera />
          <p>Movies</p>
        </div>
        <div className="home-option">
          <BsTv />
          <p>TV Series</p>
        </div>
        <div className="home-option">
          <BsHouse />
          <p>Upcoming</p>
        </div>
        <div className="rectanle-box">
          <span>Play movie uizes and earn free tickets</span>
          <p>50k people are playing now</p>
          <button className="start-playing">Start playing</button>
        </div>
      </div>
      <div>
        <img src={movieImageUrl} alt={movieTitle} className="play-screen" />
        <h2>{movieTitle}</h2>
        <p>Release Date: {movieReleaseDate}</p>
      </div>
    </div>
  );
}

export default MoviePage;
