import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PortfolioTitle() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = `http://localhost:5000/api/portfoliotitle`;
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div className="section-title text-center p-0">
          <h2 className="fs-1 font-bold text-capitalize font-sans m-0 p-0 pb-2 space-x-3">
            {item.title}
          </h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
