import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="funds">
        <p className="mt-4">Instant, zero-cost fund transfers with UPI </p>
        <Link className="btn btn-green">Add funds</Link>
        <Link className="btn btn-blue">Withdraw</Link>
      </div>

      <div className="row">
        <div className="col-6">
          <span>
            <h5>
              {" "}
              <i class="fa-regular fa-clock"></i> Equity
            </h5>
          </span>

          <div className="table">
            <div className="data">
              <p className="">Available margin</p>
              <p className="imp colored mx-5">4,043.10</p>
            </div>
            <div className="data">
              <p className="mx-1">Used margin</p>
              <p className="imp mx-5">3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp mx-5">4,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p className=" ">Opening Balance</p>
              <p className=" mx-5">4,043.10</p>
            </div>
            <div className="data">
              <p className="">Opening Balance</p>
              <p className=" mx-5">3736.40</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p className=" ">4064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p className="">0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col-6">
          <span>
            <h5>
              {" "}
              <i class="fa-solid fa-fire-flame-curved"></i> Commodity
            </h5>
          </span>

          <div className="table">
            <div className="data">
              <p className="">Available margin</p>
              <p className="imp colored mx-5">50,0499.10</p>
            </div>
            <div className="data">
              <p className="mx-1">Used margin</p>
              <p className="imp mx-5">7,769.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp mx-5">5,042.10</p>
            </div>
            <hr />
            <div className="data">
              <p className=" ">Opening Balance</p>
              <p className=" mx-5">4,043.10</p>
            </div>
            <div className="data">
              <p className="">Opening Balance</p>
              <p className=" mx-5">3736.40</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p className=" ">4064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p className="">0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
