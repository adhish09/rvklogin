import Header from "./components/Header/header";
import "./components/global.css";
import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/footer";
import Container from "./components/Herosection/Container";
import Frame from "./components/Herosection/Frame";
import RvkSection from "./components/Herosection/rvksection";
import EventsSection from "./components/Herosection/EventsSection";
import FeaturedSection from "./components/Herosection/FeaturedSection";
import hero from "./Images/hero.png";

function Home() {

    
  return (
    <>
      <Header />
      <img className="hero-icon" alt="" src={hero} />
      <Container />
      <Frame /> 
      <RvkSection />
      <EventsSection />
      <FeaturedSection />
      <Footer />
    </>
  );
}

export default Home;
