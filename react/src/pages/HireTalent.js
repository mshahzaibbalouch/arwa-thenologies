import React, { useEffect, useState } from "react";
import axios from "axios";
import WhyArwaTechnologies from "../components/WhyArwaTechnologies";
import HeroSection from "../components/HeroSection";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import Rescue from "../components/Rescue";
import { useParams } from "react-router-dom";
import SeoExpert from "../components/SeoExpert";
import DevelopersCurrentlyAvailableText from "../components/DevelopersCurrentlyAvailableText.js";
import DevelopersCurrentlyAvailable from "../components/DevelopersCurrentlyAvailable.js";
import HireSkilledRailsProgrammer from "../components/HireSkilledRailsProgrammer.js";
import HireSkilledRailsProgrammerCard from "../components/HireSkilledRailsProgrammerCard.js";

const HireTalent = () => {
  const [pageData, setPageData] = useState([]);
  const [filterPageData, setFilterPageData] = useState([]);

  const Parums = useParams();
  var cetagory = Parums.cetagory;
  cetagory = cetagory.split("-")[1];
  cetagory = cetagory.split("-")[0];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/field");
        setPageData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (pageData.length > 0) {
      const filteredData = pageData.filter((item) =>
        item.category.toLowerCase().includes(cetagory.toLowerCase())
      );
      setFilterPageData(filteredData);
      console.log(pageData);
    }
  }, [cetagory, pageData]);

  return (
    <div>
      <HeroSection />
      <DevelopersCurrentlyAvailableText
        title="Process to Assemble SEO Expert Team"
        description="Our 3-step process takes the team from inception to finished product. Devsinc ensures hiring a dedicated SEO expert team within 24 hours."
      />
      <SeoExpert category={cetagory} />
      <DevelopersCurrentlyAvailableText
        title="Rails Developers Currently Available"
        description="Majority of companies decide to hire a Ruby on Rails development company and plan to work with Rails developers. Below are the ones that are available to work efficiently."
      />
      <DevelopersCurrentlyAvailable cetagory={cetagory} />
      <HireSkilledRailsProgrammer />
      <DevelopersCurrentlyAvailableText
        title="Ruby on Rails Developer’s Expertise"
        description="We ensure to deliver competitive Rails development expertise to maintain a long term relationship with your business."
      />
      <HireSkilledRailsProgrammerCard />
      <WhyArwaTechnologies />
      <FrequentlyAskedQuestions />
      <Rescue
        data={{
          title: "Rescue your company’s growth!",
          discription:
            "Let us know about your business plans on an introductory call, and we’ll lead the matching process.",
        }}
      />
    </div>
  );
};

export default HireTalent;
