import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {
  return (
    <>
      <nav class="navbar border-bottom navbar-expand-lg  bg-body-light">
        <div class="container">
          <Link class="navbar-brand nav-logo" to="/">
            {/* <img width={"25%"} src="./images/logo.svg" alt="Logo" /> */}
            <h3 className="mx-5 invest-next"><i class="fa-solid fa-money-bill-trend-up"></i> InvestNext</h3>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <form class="d-flex mx-5" role="search">
              <ul class="navbar-nav mx-5  mb-lg-0">
                <li class="nav-item mx-3 ">
                  <Link class="nav-link active" aria-current="page" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/products"
                  >
                    Products
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="support"
                  >
                    Support
                  </Link>
                </li>

                <li class="nav-item ">
                  <Link class="nav-link active" aria-current="page" to="/login">
                    Login
                  </Link>
                </li>
                <li class="nav-item ">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/signup"
                  >
                    {/* <i class="fa-regular fa-user"></i> */}
                    Signup
                  </Link>
                </li>
                <li className="mx-3">
                  <a class="nav-link active" aria-current="page" to="#">
                    <i class="fa-solid fa-bars fs-5"></i>
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
