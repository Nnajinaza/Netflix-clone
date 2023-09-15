import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import { RiArrowRightSLine } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <section className="banner-section">
        <div className="container-xxl">
          <div className="row">
            <div className="col12">
              <Banner />
              <Nav />
            </div>
          </div>
        </div>
      </section>
      <section className="featured-first-row">
        <div className="featured-section">
          <div className="featured-movie">
            <h4 className="featured">Featured Movie</h4>
          </div>
          <div className="see-more-option">
            <h5 className="see-more">See more</h5>
            <RiArrowRightSLine color="#BE123C" />
          </div>
        </div>
      </section>
      <section className="featured-movies">
        <div className="featured-card">
          <img src="images/stranger-things.jpg" alt="stranger things" />
        </div>
      </section>
    </>
  );
};

export default Home;
