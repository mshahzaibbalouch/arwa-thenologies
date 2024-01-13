import axios from "axios";
import React, { useEffect, useState } from "react";
import PortfolioTitle from "./PortfolioTitle";

const PortfolioSection = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/portfolio");
        setData(response.data);
        setFilteredData(response.data);

        const categories = response.data.map((item) => item.category);
        const uniqueCategories = [...new Set(categories)];
        setUniqueCategories(uniqueCategories);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);

    if (category === "all") {
      setFilteredData(data);
    } else {
      const filterData = data.filter((item) => item.category === category);
      setFilteredData(filterData);
    }
    console.log("filter-" + category);
  };

  return (
    <section id="portfolio" className="portfolio h-auto mt-1 py-4">
      {data.length !== 0 ? (
        <div className="container" data-aos="fade-up">
          <PortfolioTitle />
          <ul
            id="portfolio-flters"
            className="d-flex py-2 justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li
              onClick={() => handleFilterClick("all")}
              className={`rounded-2 ${
                selectedCategory === "all" ? "filter-active active" : ""
              } filter-all`}
              data-filter={`.filter-all`}
            >
              All
            </li>
            {/* Map through unique categories */}
            {uniqueCategories.map((category, index) => (
              <li
                key={index}
                onClick={() => handleFilterClick(category)}
                className={`rounded-2 ${
                  selectedCategory === category ? "filter-active active" : ""
                }`}
                data-filter={`.filter-${category}`}
              >
                {category}
              </li>
            ))}
          </ul>
          <div
            className="row h-auto portfolio-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {filteredData.map((item, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-6 portfolio-item filter-${item.category}`}
              >
                <div className="portfolio-img navbar">
                  <img src={item.image} className="img-fluid" alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default PortfolioSection;
