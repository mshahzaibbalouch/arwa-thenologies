import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import HowWeWork from "../components/HowWeWork";
import Testimonial from "../components/Testimonial";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import Rescue from "../components/Rescue";

const Home = () => {
  return (
    <div>
      <HeroSection category={"home"} />
      <ServicesSection />
      <PortfolioSection />
      <HowWeWork />
      <Testimonial />
      <FrequentlyAskedQuestions category={"home"} />
      <Rescue  />
    </div>
  );
};

export default Home;
