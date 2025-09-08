import React from "react";
import { Link } from "react-router-dom";

const Bids = () => {
  return (
    <>
      <div>
        <h3 className="title">Actions(18)</h3>
        <input
          type="search"
          name=""
          className="text-center"
          placeholder="Search here"
        />
        <button>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="order-table mt-4">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Eligible qyt.</th>
            <th>Last Price</th>
            <th>Holding Price</th>
            <th>Holding P&L</th>
            <th>Action No.</th>
          </tr>
          {/* 
          {newOrders.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.mode}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
              </tr>
            );
          })} */}
        </table>
      </div>

      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </>
  );
};

export default Bids;
