import React from "react";

export function Hero() {
  return (
    <>
      <div className="contaioner mt-5">
        <div className="row  text-center ">
          <h1 className="mt-5 product-text">Zerodha Products</h1>
          <h5 className="text-muted mt-2 ">
            Sleek, modern, and intuitive trading platforms
          </h5>
          <p className="fs-7 mt-1 mb-5">
            Check out our{" "}
            <a className="investment-txt  " href="#">
              {" "}
              investment offerings →
            </a>
          </p>
        </div>
      </div>
      <div className="border-top"></div>
    </>
  );
}
