import React from "react";
import Home1 from "../components/Home1";
import Home2 from "../components/Home2";
import Header from "../container/Header";
import Footer from "../container/Footer";

const Home = () => {
  return (
    <div className="home_container">
      <Header />
      <Home1 />
      <Home2 />
    </div>
  );
};

export default Home;
