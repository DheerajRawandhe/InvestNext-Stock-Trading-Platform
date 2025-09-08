import React from "react";

function Awards() {
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-6   ">
            <img src="./images/largestBroker.svg" alt="award-img" />
          </div>
          <div className="col-6">
            <h1>Largest stock broker in India</h1>
            <p className="stock-broker mt-2">
              2+ million Zerodha clients contribute to over 15% of all volumes
              in India daily by tranding and investing in :
            </p>
            <div className="row ">
              <div className="col-6 mt-4">
                <ul>
                  <li>
                    <p> Futures abd Options </p>
                  </li>
                  <li>
                    <p> Comodity derivatives </p>
                  </li>
                  <li>
                    <p> Currency derivatives </p>
                  </li>
                </ul>
              </div>
              <div className="col-6 mt-4">
                <ul>
                  <li>
                    <p> Stock & IPOs </p>
                  </li>
                  <li>
                    <p> Direct mutual funds </p>
                  </li>
                  <li>
                    <p> Bonds and Govt. Security </p>
                  </li>
                </ul>
              </div>
            </div>
            <img
              className="mt-4 press-img"
              src="./images/pressLogos.png"
              alt="pressLogos-img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
