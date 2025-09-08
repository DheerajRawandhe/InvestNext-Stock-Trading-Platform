import React from "react";

export const Benefits = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 text-center ">
            <img
              className="benefits-img "
              src="./images/acop-benefits.svg"
              alt="img"
            />
            <h2>Benefits of opening a Zerodha brdemat account</h2>
          </div>
          <div className="col-6 mt-5 mb-5">
            <h5 className="mt-5"> Unbeatable pricing </h5>
            <p>
              Zero charges for equity & mutual fund investments. Flat ₹20 fees
              for intraday and F&O trades.
            </p>

            <h5>Best investing experience</h5>
            <p>
              Simple and intuitive trading platform with an easy-to-understand
              user interface.
            </p>

            <h5>No spam or gimmicks</h5>
            <p>
              Committed to transparency — no gimmicks, spam, "gamification", or
              intrusive push notifications.
            </p>

            <h5>The Zerodha universe</h5>
            <p className="mb-5">
              More than just an app — gain free access to the entire ecosystem
              of our partner products.
            </p>
          </div>
        </div>
      </div>

      {/* =============== account types ========================= */}

      <div className="container mt-5">
        <h2 className="text-center mt-4">Explore different account types</h2>
        <div className="row  mt-5 ">
          <div className="col-3 invest-para">
            <h5 className=" mt-3">
              {" "}
              <img src="./icons-account/acop-individual.svg" alt="img" />{" "}
              individual account{" "}
            </h5>
            <p className="mt-3 ">
              {" "}
              Invest in equity, mutual funds and <br /> derivatives
            </p>
          </div>
          <div className="col-1"></div>
          <div className="col-3 invest-para">
            <h5 className=" mt-3">
              <img src="./icons-account/acop-huf.svg" alt="img" /> HUF Account
            </h5>
            <p className="mt-3">
              Make tax-efficient investments <br /> foryour family
            </p>
          </div>
          <div className="col-1"></div>
          <div className="col-3 invest-para">
            <h5 className=" mt-3">
              <img src="./icons-account/acop-nri.svg" alt="img" /> NRI account{" "}
            </h5>
            <p className="mt-3">
              Invest in equity, mutual funds,
              <br /> debentures, and more
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-3 invest-para">
            <h5 className=" mt-3">
              <img src="./icons-account/acop-minor.svg" alt="img" /> NRI account{" "}
              Minor account{" "}
            </h5>
            <p className="mt-3 ">
              {" "}
              Teach your little ones about money & invest for their future with
              them
            </p>
          </div>
          <div className="col-1"></div>
          <div className="col-3 invest-para mb-5">
            <h6 className="mt-3">
              <img src="./icons-account/acop-corporate.svg" alt="img" /> NRI
              account Corporate / LLP/ Partnership
            </h6>
            <p className="mt-3">
              Manage your business surplus and investments easily
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
