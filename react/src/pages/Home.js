import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import HowWeWork from "../components/HowWeWork";
import Testimonial from "../components/Testimonial";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import Rescue from "../components/Rescue";

const Home = () => {
  const [rescueData, setRescueData] = useState({});



  useEffect(() => {
    const fetchRescueData = () => {
      // const rescue = axios.get(`https://localhost:3000/api/rescue/${cetagory}`)
      const rescue = {
        title: "Rescue your company’s growth!",
        discription:
          "Let us know about your business plans on an introductory call, and we’ll lead the matching process.",
      };

      setRescueData(rescue);
    };

    fetchRescueData();
  }, []);

  return (
    <div>
      <HeroSection category={"home"} />
      <Features />
      <ServicesSection />
      <PortfolioSection />
      <HowWeWork />
      <Testimonial />
      <FrequentlyAskedQuestions />
      <Rescue data={rescueData} />
    </div>
  );
};

export default Home;
