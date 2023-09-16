import axios from "../axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";
import { BsPlayCircle } from "react-icons/bs";
import { GiTomato } from "react-icons/gi";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n-1) + '...' : string;
  }

  return (
    <div>
      <img
        className="background_image"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={`${movie.title} background`}
      />
      <div className="movie-details">
        <h1 className="movie-title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="movie-rating">
          <img
            src="images/imdb.jpg"
            alt="imdb"
            className="movie-rating-image"
          />
          <h6>86.0/100</h6>
          <GiTomato color="red" size="18" />
        </div>
        <h4 className="movie-desc">{truncate(movie?.overview, 150)}</h4>
        <button className="movie-btn">
          <BsPlayCircle size="17" className="play-btn" />
          <h4>WATCH TRAILER</h4>
        </button>
      </div>
    </div>
  );
}

export default Banner;
