import React from "react";

export function Hero() {
  return (
    <>
      <div className="price-chang text-center">
        <h1 className="mt-5 ">Charges</h1>
        <h5 className="text-muted ">List of all charges and taxes</h5>
      </div>

      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-4">
            <img className="price-img" src="./images/price1.svg" alt="" />
          </div>
          <div className="col-4">
            <img className="price-img" src="./images/price3.svg" alt="" />
          </div>
          <div className="col-4">
            <img className="price-img" src="./images/price1.svg" alt="" />
          </div>
        </div>

        <div className="row text-center mt-4">
          <div className="col-4">
            <h3>Free equity delivery</h3>
            <p className=" mt-4 text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4">
            <h3>Intraday and F&O trades</h3>
            <p className=" mt-4 text-muted">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4">
            <h3>Free direct MF</h3>
            <p className=" mt-4   text-muted">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
