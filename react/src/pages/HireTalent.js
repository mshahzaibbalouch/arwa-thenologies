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
import HireSkilledProgrammer from "../components/HireSkilledProgrammer.js";
import DeveloperExperties from "../components/DeveloperExperties.js";


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
      <HeroSection category={cetagory}  />
      <SeoExpert category={cetagory} />
      <DevelopersCurrentlyAvailableText  category={cetagory}/>
      <DevelopersCurrentlyAvailable cetagory={cetagory} />
      <HireSkilledProgrammer category={cetagory} />
      <DeveloperExperties category={cetagory}/>
      <WhyArwaTechnologies category={cetagory}/>
      <FrequentlyAskedQuestions category={cetagory}/>
      <Rescue/>
    </div>
  );
};

export default HireTalent;
