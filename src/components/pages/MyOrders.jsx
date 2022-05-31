import React, { useEffect } from "react";

function MyOrders() {
  useEffect(() => {
    console.log("mount MyOrders");
  }, []);

  return (
    <>
      <h1>My orders</h1>
      <ul>
        <li>
          <h3>Product name</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
        </li>
        <li>
          <h3>Product name</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
        </li>
        <li>
          <h3>Product name</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
        </li>
      </ul>
    </>
  );
}

export default MyOrders;
