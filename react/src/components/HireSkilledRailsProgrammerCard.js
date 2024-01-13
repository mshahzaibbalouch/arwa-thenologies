import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/HireSkilledRailsProgrammerCard.css';

function HireSkilledRailsProgrammerCard({category}) {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/developersexpertise'); 
        const filteredData = response.data.filter(
          (item) => item.category === category
        );
        setCardData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); 

  return (
    <div className='container'>
      <div className='row mt-5'>
        {cardData.map((card, index) => (
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
  );
}

export default HireSkilledRailsProgrammerCard;
