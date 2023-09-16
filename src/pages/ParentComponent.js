// ParentComponent.js
import React from "react";

function ParentComponent() {
  const movieImageUrl = {`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}; // Replace with the actual movie image URL
  const movieTitle = "Movie Title"; // Replace with the actual movie title
  const movieReleaseDate = "2023-09-16"; // Replace with the actual release date

  return (
    <MoviePage
      movieImageUrl={movieImageUrl}
      movieTitle={movieTitle}
      movieReleaseDate={movieReleaseDate}
    />
  );
}

export default ParentComponent;
