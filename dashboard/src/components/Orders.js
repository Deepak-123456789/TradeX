import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
const Orders = () => {
  const [allOrders, SetAllOrders] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const email = Cookies.get("user_email");
    console.log("Token before request:", email);

    axios
      .get(`${process.env.REACT_APP_BACKEND}/allorders`, {
        headers: {
          email: email,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        SetAllOrders(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          navigate("/login");
          window.location.href = `${process.env.REACT_APP_SERVER1}/login`;
        }
      });
  }, [navigate]);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {allOrders.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;
