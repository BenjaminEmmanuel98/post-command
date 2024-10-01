import React from "react";
import Product from "../../Product/Product";
import SignUp from "../../SignupScreen/SignUp";
import FecTchandDeleTeDaTa from "../../UserScreen/FecTchandDeleTeDaTa";
import UpadateMyPersonalprofile from "../../UserScreen/UpadateMyPersonalprofile";
import Login from "../../LoginScreen/Login";
import Pratices from "../../Pratice/Pratices";
import Praticet from "../../Praticaltwo/Praticet";
// import Users from "../../Screen/UserScreen/Users";
// import UserDetailsScreen from "../../Screen/UserScreen/UserDetailsScreen";

const Home = () => {
  return (
    <div>
      <Praticet/>
      <Pratices/>
      {/* <Login/> */}
      {/* <UpadateMyPersonalprofile/> */}
      {/* <FecTchandDeleTeDaTa/> */}
      {/* <Users /> */}
      {/* <SignUp /> */}
      {/* <Product/> */}
    </div>
  );
};

export default Home;
