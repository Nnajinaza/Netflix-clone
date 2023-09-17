import React, { useEffect, useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import axios from "../axios";
import { GiTomato } from "react-icons/gi";
import { Link } from "react-router-dom";

function FeaturedMovies({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState(10); // Initially, display 10 movies
  const [numColumns, setNumColumns] = useState(5); // Initially, display 5 columns
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // Function to extract the year from a date string
  function extractYearFromDate(dateString) {
    const date = new Date(dateString);
    return date.getFullYear();
  }

  // Function to load more movies when the "See more" button is clicked
  function loadMoreMovies() {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 20); // Increase visible movies
    setNumColumns(4); // Set the number of columns to 4
  }

  return (
    <div>
      <section className="featured-first-row">
        <div className="featured-section">
          <div className="featured-movie">
            <h4 className="featured">{title}</h4>
          </div>
          <div className="see-more-option">
            <h5 className="see-more" onClick={loadMoreMovies}>
              See more
            </h5>
            <RiArrowRightSLine color="#BE123C" onClick={loadMoreMovies} />
          </div>
        </div>
      </section>
      <section className="row-poster">
        <div
          className="single-movie-card"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${numColumns}, 1fr)`, // Control the number of columns
            gap: "20px", // Adjust the gap between movies
          }}
        >
          {movies.slice(0, visibleMovies).map((movie) => (
            <Link
              to={`/movie/${movie.id}`} // Navigate to the MoviePage with movie ID
              key={movie.id}
              className="movie-item"
              data-testid="movie-card"
            >
              <img
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.title}
                data-testid="movie-poster"
              />
              <p className="production-date" data-testid="movie-release-date">
                USA {extractYearFromDate(movie.release_date)}
              </p>
              <h4 className="featured-movie-title" data-testid="movie-title">
                {movie.title || movie.name || movie.original_title}
              </h4>
              <div className="movie-rating fatured-movie-rating">
                <img
                  src="images/imdb.jpg"
                  alt="imdb"
                  className="movie-rating-image"
                />
                <h6>86.0/100</h6>
                <p>80%</p>
                <GiTomato />
              </div>
              <p className="featured-genre">Action</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FeaturedMovies;
