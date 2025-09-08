import React from "react";
import "../login/Login.css";

export const Login = () => {
  return (
    <>
      <div className="container login-page p-5  mt-5">
        <h2 className="login-h2 text-center">LogIn to Zerodha</h2>

        <div className="login mt-4">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=" Email or Phone"
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary login-btn">
              Login
            </button>
            <div>
              <a className="forget text-muted " href="#">
                Forgot Eamil or password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
