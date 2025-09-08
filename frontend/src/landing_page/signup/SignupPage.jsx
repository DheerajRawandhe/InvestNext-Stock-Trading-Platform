import React from "react";

export const SignupPage = () => {
  return (
    <>
      <div className="container">
        <h2 className="text-center">Sign Up to Zerodha</h2>
        <div className="row">
          <div className="col-6">
            <div className="col-6 text-center">
              <img
                className="account-img"
                src="./images/account_open.svg"
                alt="img"
              />
            </div>
          </div>

          <div className="col-6 mt-3 p-5">
            <form>
              <h2 className="text-center">Sign Up Now</h2>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label mt-4  ">
                  Email address :
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label  ">
                  User Name :
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Username"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password :
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter password"
                  required
                />
              </div>

              <button type="submit" class="btn btn-primary signup-btn">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
