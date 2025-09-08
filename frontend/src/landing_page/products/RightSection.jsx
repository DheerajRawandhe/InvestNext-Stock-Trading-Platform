import React from "react";

export function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-6 right-console">
            <h2>{productName}</h2>
            <p className="">{productDescription}</p>
            <a className="kite-links " href="#">
              {learnMore} <i class="fa-solid fa-arrow-right"></i>{" "}
            </a>
          </div>

          <div className="col-6">
            <img src={imageURL} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
}
