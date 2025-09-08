import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios, { all } from "axios";

const Orders = () => {
  const [newOrders, setNewOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/newOrder").then((res) => {
      // console.log(res.data);
      setNewOrders(res.data);
    });
  }, []);

  return (
    <div className="orders">
      <h3 className="title">Open orders ({newOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name </th>
            <th>Mode</th>
            <th>Qty.</th>
            <th>Price </th>
          </tr>

          {newOrders.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.mode}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
              </tr>
            );
          })}
        </table>
      </div>

      {/*-------------------------------------------------- */}
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
