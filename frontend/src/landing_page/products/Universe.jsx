import React from "react";
import { Link } from "react-router-dom";

export function Universe() {
  return (
    <>
      <h2 className="text-center mt-5">The Zerodha Universe</h2>
      <div className="container mb-5 text-center text-muted">
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="container">
        <div className="row mx-4 text-muted ">
          <div className="col-4 p-3 ">
            <img
              className="img-univ"
              src="./images/zerodhaFundhouse.png"
              alt="img"
            />
            <p className="text-univ">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-3">
            <img
              className="img-sensibull"
              src="./images/sensibull.svg"
              alt="img"
            />
            <p className="text-trend">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-3 ">
            <img className="img-univ" src="./images/tijori.svg" alt="img" />
            <p className="text-univ">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>

        <div className="row mx-4 text-muted ">
          <div className="col-4 p-3 ">
            <img className="img-univ" src="./images/streakLogo.png" alt="img" />
            <p className="text-univ">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-3">
            <img className="img" src="./images/smallcaseLogo.png" alt="img" />
            <p className="text-trend">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-3 ">
            <img className="img-univ" src="./images/dittoLogo.png" alt="img" />
            <p className="text-univ">
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </div>
        </div>
      </div>
      <div className=" text-center">
        <Link to="/signup">
          <button className=" signup-btn   mb-5">Sign up for free</button>
        </Link>
      </div>
    </>
  );
}
