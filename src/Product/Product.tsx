import React, { useState } from "react";
import { userData } from "../Data/Data";
import Cartitem from "../Roughjava/Cartitem";

const Product = () => {
  const [displayUser, setUserinfo] = useState([userData]);
  return (
    <div>
      <Cartitem daddy={displayUser} />

      {/* {userData .slice(0, 1,).map((items: any) => (
        <div>
          {items.id}
          {items.firstname}
          {items.lastname}
          {items.age}
          {items.isAdmin}
        </div>
      ))} */}
    </div>
  );
};

export default Product;
