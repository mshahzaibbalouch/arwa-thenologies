import React, { useEffect, useState } from 'react';
import '../css/HireSkilledRailsProgrammerCard.css';
import axios from "axios";


function HireSkilledRailsProgrammerCard({category}) {

  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = `http://localhost:5000/api/developerexpertise`;
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
      {data.map((data, dataIndex) => (
        <div key={dataIndex} className='container'>
          <div className='row'>
          <div className="text-center my-5">
            <div className="col-md-12">
              <h3>{data.title}</h3>
              <p className='my-3'>{data.description}</p>
            </div>
          </div>
          <div className='row'>
            {data.cards.map((card, index) => (
              <div key={index} className='col-lg-4'>
                <div className="card custom-card rounded mb-5">
                  <div className="card-body">
                    <div>
                      <img src={card.image} className="img-fluid w-25" alt={card.image} />
                    </div>
                    <h2 className="card-title">{card.title}</h2>
                    <p className="card-text mb-5">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HireSkilledRailsProgrammerCard;
