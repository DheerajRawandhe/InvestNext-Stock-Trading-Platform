import React from "react";

function Education() {
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-6">
            <img src="./images/education.svg" alt="varsity-img" />
          </div>
          <div className="col-6 mt-5">
            <h2 className="mt-5">Free and open market education</h2>
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a className="see-pricing" href="/">
              Varsity <i class="fa-solid fa-arrow-right"></i>{" "}
            </a>

            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a className="see-pricing" href="/">
              TradingQ&A <i class="fa-solid fa-arrow-right"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
