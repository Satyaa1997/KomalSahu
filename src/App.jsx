import React from "react";
import TopBar from "./Component/TopBar";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

import { Route, Routes } from "react-router-dom";

import Home from "./Component/Home";

const App = () => {
  return (
    <>
      <TopBar />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

