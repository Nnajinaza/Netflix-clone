const API_kEY = "ed5c64a7fec8f96eca3cde9d66850175";

const requests = {
  fetchTopRated: `/movie/top_rated?api_key=${API_kEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_kEY}&with_networks=213`
};

export default requests;

// https://api.themoviedb.org/3/movie/top_rated?api_key=ed5c64a7fec8f96eca3cde9d66850175&language=en-US
// https://api.themoviedb.org/3/discover/tv?api_key=ed5c64a7fec8f96eca3cde9d66850175&with_networks=213`

// https://api.themoviedb.org/3/movie/{movie_id}/images