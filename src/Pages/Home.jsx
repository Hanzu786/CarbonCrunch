import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <Hero />
      <Section1 />
      <Section2 />
      <Footer />
     
    </div>
  );
};

export default Home;
