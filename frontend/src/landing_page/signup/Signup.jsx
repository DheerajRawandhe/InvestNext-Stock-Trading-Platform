import React from "react";
import "../signup/Signup.css";
import OpenAccount from "../OpenAccount";
import { Benefits } from "./Benefits";
import { FAQs } from "./FAQs";
import { SignupPage } from "./SignupPage";

export function Signup() {
  return (
    <>
      <div className="mt-5 text-center ">
        <h1 className="signup-page ">
          Open a free demat and trading account online
        </h1>
        <h6 className="mt-3  mb-5">
          Start investing brokerage free and join a community of 1.5+ crore
          investors and traders
        </h6>
      </div>

      {/*-------------------------------------- Signup now  --------------------------- */}
      <SignupPage />

      {/* <div className="container ">
        <div className="row">
          <div className="col-6 text-center">
            <img
              className="account-img"
              src="./images/account_open.svg"
              alt="img"
            />
          </div>

          <div className="col-6 mt-5 p-2">
            <h2 className="mt-5">Signup now</h2>
            <p className="text-muted">Or track your existing application</p>
            <div>
              <span className="signup-number " class="mobile-prefix">
                +91
              </span>

              <input
                type="number"
                autofocus=""
                min="1000000000"
                max="9999999999"
                name="mobile"
                id="user_mobile"
                placeholder="Your 10 digit mobile number"
                required=""
                className="sign-num mx-1"
              ></input>
              <p className="otp mx-4 mt-1 text-muted">
                You will receive an OTP on your number
              </p>
            </div>
            <button className="continue-btn mx-4">Continue</button>
            <p className="account-open mx-4 mt-2">
              Want to open an NRI account?
            </p>
            <p className="procee mx-4">
              By proceeding, you agree to the Zerodha{" "}
              <p className="account-open">terms & privacy policy</p>
            </p>
          </div>
        </div> 
      </div>*/}

      {/* ------------------ Investment options ------------------------------- */}

      <h2 className="text-center">
        Investment options with Zerodha demat account
      </h2>

      <div className="container mt-5 invest-main">
        <dil className="row mx-5">
          <div className="col-6 p-5">
            <img src="./images/stocks-acop.svg" alt="img" />
            <h4>Stocks</h4>
            <p>Invest in all exchange-listed securities</p>

            <img className="mt-4" src="./images/ipo-acop.svg" alt="img" />
            <h4>IPO</h4>
            <p>Invest in commission-free direct mutual funds</p>
          </div>
          <div className="col-6 mt-5 ">
            <img src="./images/mf-acop.svg" alt="img" />
            <h4>Mutual funds</h4>
            <p>Apply to the latest IPOs instantly via UPI</p>

            <img className="mt-4" src="./images/fo-acop.svg" alt="img" />
            <h4>Futures & options</h4>
            <p>
              Hedge and mitigate market risk through <br /> simplified F&O
              trading
            </p>
          </div>
        </dil>
      </div>
      <div className="text-center">
        <button className="explore-btn mx-4 mb-5">Explore Investments</button>
      </div>

      {/* ================= demat account  ==================== */}

      <h2 className="mt-5 text-center">
        Steps to open a demat account with Zerodha
      </h2>

      <div className="container">
        <div className="row">
          <div className="col-6 p-5 text-center">
            <img src="/images/steps-acop.svg" alt="img" />
          </div>
          <div className="col-6">
            <div class="acop-steps mt-5">
              <div className="mt-5 p-4 ">
                <h5>
                  {" "}
                  {/* <p className="steps-num">01</p> */}
                  <button className="steps-btn  mx-2">01</button>Enter the
                  requested details
                </h5>
                <hr />
                <h5>
                  {" "}
                  <button className="steps-btn  mx-2">02</button>Complete e-sign
                  & verification
                </h5>
                <hr />
                <h5>
                  {" "}
                  <button className="steps-btn  mx-2">03</button>Start
                  investing!
                </h5>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Benefits />
      <FAQs />
      <OpenAccount />
    </>
  );
}
