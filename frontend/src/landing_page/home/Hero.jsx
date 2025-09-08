import React from "react";
import { Signup } from "../signup/Signup";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="container p-5 mb-3 mt-5">
        <div className="row">
          <div className="col">
            <img
              className="hero-img"
              src="./images/homeHero.png"
              alt="heroimg"
            />
          </div>
          <div className="sign-up p-5">
            <h1>Invest in everything</h1>
            <p>
              Online platform to invest in stocks, derivatives, mutual funds,
              ETFs, bonds, and more.
            </p>
            <Link to="/signup">
              <button className="signup-btn ">Sign up for free</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
