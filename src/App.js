import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2"
import Header from "./components/Header";
import "./index.css"


function App() {
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
}

export default App;
