import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Page/HomePage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDetailsScreen from "./Screen/UserScreen/UserDetailsScreen";
import SignUp from "./SignupScreen/SignUp";

function App() {
  return (
    <div>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productDetails/id" element={<UserDetailsScreen />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
