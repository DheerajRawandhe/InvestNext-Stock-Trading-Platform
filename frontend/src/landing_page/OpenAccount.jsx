import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <>
      <div className="container p-5 mb-3 mt-5">
        <div className="row">
          <div className="account p-5">
            <h2>Open a Zerodha account</h2>
            <p className="">
              Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
              and F&O trades.
            </p>
            <Link to="/signup">
              <button className="signup-btn ">Sign up Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default OpenAccount;
