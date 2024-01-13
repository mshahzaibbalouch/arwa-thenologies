import React, { useState, useEffect } from "react";
import axios from "axios";


function ParentComponent({ category }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = `http://localhost:5000/api/allteamtitle`;
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const filteredData = response.data.filter(
          (item) => item.category === category
        );
        setData(filteredData);
        console.log(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [category]);
  return (
    <div>
      <div className='container'>
        {data.map((item, index) => (
          <div className='row mt-5'>
          <div className='text-center '>
            <h3>{item.title}</h3>
            <p className='my-3'>{item.description}</p>
          </div>
        </div>
          ))}
      </div>
    </div>
  );
}

export default ParentComponent;
