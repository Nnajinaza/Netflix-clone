import React, { useState, useEffect } from "react";
import { BsCamera, BsHouse, BsTv } from "react-icons/bs";
import "./MoviePage.css";
import { useParams } from "react-router-dom";
import axios from "../axios";


function MoviePage({ fetchUrl, isLargeRow = true }) {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data);
      return request;
    }
    console.log("Error fetching data: ");
    fetchData();
  }, [movieId]);


  return (
    <div>
      <div className="rectangle-bar">
        <div className="logo-moviebox">
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
          <span>Play movie quizzes and earn free tickets</span>
          <p>50k people are playing now</p>
          <button className="start-playing">Start playing</button>
        </div>
      </div>
      <div className="movie-section">
        <img
          src={`${base_url}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.title}
          data-testid="movie-poster"
        />
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <p>Release Date: {movie.releaseDate}</p>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
