import React from "react";

const Summary = () => {
  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      {/*----------------- Equity ------------- */}
      <div className="section ">
        <div className="row">
          <div className="col-6">
            <span>
              <p>
                {" "}
                <i class="fa-regular fa-clock"></i> Equity
              </p>
            </span>
            <div className="data">
              <div className="first">
                <h3>1L</h3>
                <p>Margin available</p>
              </div>
              <hr />

              <div className="second">
                <p className="mx-5">
                  Margins used <span>0</span>{" "}
                </p>
                <p className="mx-5">
                  Opening balance <span>1L</span>{" "}
                </p>
                <p className="view-stste mx-5">
                  {" "}
                  <a href="#">
                    {" "}
                    <img
                      className="console-img"
                      src="./console.svg"
                      alt="console"
                    />{" "}
                    View statement
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/*----------------- commodity ------------ */}
          <div className="col-6">
            <span>
              <p>
                {" "}
                <i class="fa-solid fa-fire-flame-curved"></i> Commodity
              </p>
            </span>
            <div className="data">
              <div className="first">
                <h3>50k</h3>
                <p>Margin available</p>
              </div>
              <hr />

              <div className="second">
                <p className="mx-5">
                  Margins used <span>0</span>{" "}
                </p>
                <p className="mx-5">
                  Opening balance <span>50k</span>{" "}
                </p>
                <p className="view-stste mx-5">
                  {" "}
                  <a href="#">
                    {" "}
                    <img
                      className="console-img"
                      src="./console.svg"
                      alt="console"
                    />{" "}
                    View statement
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>
            <i class="fa-solid fa-hands-holding-circle"></i> Holdings (13)
          </p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p className="mx-2">P&L</p>
          </div>
          <hr />

          <div className="second ">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        {/* <hr className="divider" /> */}
      </div>

      <img src="./Graphs/holding.png" alt="img" />
      <div className="holding-values">
        <p className="mx-4">₹15,463.77</p>
        <div className="">
          <input type="radio" name="Current value" id="" /> Current value &nbsp;
          <input type="radio" name="Investment value" id="" /> Investment value
          &nbsp;
          <input type="radio" name="P&L" id="" /> P&L
        </div>
      </div>
      <hr className="divider" />

      {/* ---------------- Market Overview --------------------- */}
      <div>
        {/* <p>
          {" "}
          <i class="fa-solid fa-arrow-trend-up"></i> Market Overview
        </p> */}
        <div className="market-img">
          <img src="./Graphs/market.png" alt="img" />
        </div>
      </div>
      
    </>
  );
};

export default Summary;
