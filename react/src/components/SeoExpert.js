import React, { useState, useEffect } from "react";
import axios from "axios";

import "../css/SeoExpert.css";

function SeoExpert({ category }) {
  const [hireStepData, setHireStepData] = useState([]);
  useEffect(() => {
    const apiUrl = `http://localhost:5000/api/hire-step`;
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const filteredData = response.data.filter(
          (item) => item.category === category
        );
        setHireStepData(filteredData);
        console.log(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [category]);
  
  return (
    <div className="container">
      <div className="text-center">
        {hireStepData.map((item, index) => (
          <div className="row">
            <div className="col-md-4" key={index}>
              <div className={`icon-${index + 1} my-3 div`}>
                <img
                  src={"assets/img/SeoExpert/step1.svg"}
                  alt={`step${index + 1}`}
                  className="img-fluid w-25"
                />
              </div>
              <div className="mt-3">
                <h3>{item.firtsTitle}</h3>
                <p className="fs-5">{item.firstDescription}</p>
              </div>
            </div>
            <div className="col-md-4" key={index}>
              <div className={`icon-${index + 1} my-3 div`}>
                <img
                  src={"assets/img/SeoExpert/step2.svg"}
                  alt={`step${index + 1}`}
                  className="img-fluid w-25"
                />
              </div>
              <div className="mt-3">
                <h3>{item.secoundTitle}</h3>
                <p className="fs-5">{item.secoundDescription}</p>
              </div>
            </div>
            <div className="col-md-4" key={index}>
              <div className={`icon-${index + 1} my-3 div`}>
                <img
                  src={"assets/img/SeoExpert/step3.svg"}
                  alt={`step${index + 1}`}
                  className="img-fluid w-25"
                />
              </div>
              <div className="mt-3">
                <h3>{item.therdTitle}</h3>
                <p className="fs-5">{item.therdDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeoExpert;
