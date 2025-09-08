import React from "react";

export function Team() {
  return (
    <>
      <div className="container">
        <div className="row p-5  mt-5 border-top">
          <h2 className="text-center">People</h2>
          <div className="col-6 ab-tx">
            <img
              className=" nithinKamath-img"
              src="./images/nithinKamath.jpg"
              alt="nithinKamath"
            />
            <h5 className="mt-2 text-center">Nithin Kamath</h5>
            <p className="text-center">Founder, CEO</p>
          </div>

          <div className="col-6 ab-tx">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>
              Playing basketball is his zen.
              <p className=""></p>
              Connect on{" "}
              <a className=" about-link-txt " href="#">
                Homepage / TradingQnA / Twitter
              </a>
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-center ">Team</h2>
          <div className="row mt-5 mx-4  ">
            <div className="col-4 ">
              <img
                className="team-imgs"
                src="./team-imgs/Nikhil.jpg"
                alt="Nikhil"
              />
              <h5 className=" team-name">Nikhil Kamath</h5>
              <p className=" team-name">Co-founder & CFO</p>
            </div>
            <div className="col-4  ">
              <img
                className="team-imgs"
                src="./team-imgs/Kailash.jpg"
                alt="Dr. Kailash Nadh"
              />
              <h5 className="team-name ">Dr. Kailash Nadh</h5>
              <p className=" team-name">CTO</p>
            </div>
            <div className="col-4 ">
              <img
                className="team-imgs"
                src="./team-imgs/Venu.jpg"
                alt="Venu"
              />
              <h5 className=" team-name ">Venu Madhav</h5>
              <p className="team-name ">COO</p>
            </div>
          </div>

          <div className="row mt-5 ">
            <div className="col-4 ">
              <img
                className="team-imgs"
                src="./team-imgs/Hanan.jpg"
                alt="Hanan"
              />
              <h5 className=" team-name">Hanan Delvih</h5>
              <p className=" team-name">CCO</p>
            </div>
            <div className="col-4  ">
              <img
                className="team-imgs"
                src="./team-imgs/Seema.jpg"
                alt="Seema "
              />
              <h5 className="team-name ">Seema Patil</h5>
              <p className=" team-name">Director</p>
            </div>
            <div className="col-4 ">
              <img
                className="team-imgs"
                src="./team-imgs/Austin.jpg"
                alt="Austin"
              />
              <h5 className=" team-name ">Austin Prakesh</h5>
              <p className="team-name mb-5 ">Director Strategy</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
