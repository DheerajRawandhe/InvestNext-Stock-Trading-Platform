import React from "react";

export function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className="container ">
        <div className="row mt-5">
          <div className="col-5 p-3">
            {/* <img src="./images/kite.png" alt="img" /> */}
            <img src={imageURL} alt="" />
          </div>
          <div className="col-2"></div>
          <div className="col-5 p-5">
            <h2>{productName}</h2>
            <p className="mt-3">{productDescription}</p>
            <a className="kite-links" href="#">
              {tryDemo} <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a className=" kite kite-links " href="# ">
              {learnMore}
              <i class="fa-solid fa-arrow-right"></i>
            </a>
            <div className="">
              <a href="#">
                {googlePlay} <img src="./images/googlePlay.svg" alt="google" />{" "}
              </a>
              <a href="#">
                {appStore} <img src="./images/appstore.svg" alt="app-stor" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
