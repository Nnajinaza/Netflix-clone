import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import requests from "../Request";
import FeaturedMovies from "../components/FeaturedMovies";
import Footer from "../components/Footer";
import MoviePage from "./MoviePage";

const Home = () => {
  return (
    <>
      <section className="banner-section">
        <div className="container-xxl">
          <div className="row">
            <div className="col12">
              <Banner />
              <Nav />
              <FeaturedMovies title="Top rated" fetchUrl={requests.fetchTopRated} isLargeRow />
              <MoviePage fetchUrl={requests.fetchMovieDtails} isLargeRow />
              <Footer />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
