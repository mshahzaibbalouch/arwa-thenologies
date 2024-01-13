import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/WhatSetsUsApart.css';

function WhatSetsUsApart() {
  const [cardData, setCardData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/whatwedo');
        setCardData(response.data.whatWeDoItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <h1 className='text-black text-center my-5 py-3'>What Sets Us Apart?</h1>
        {cardData.map((card, index) => (
          <div className='col-lg-4 mb-4 ' key={index}>
            <div
              className={`main-content card  rounded shadow h-100 ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {hoveredIndex !== index && (
                <>
                  <div className={`img-div ${hoveredIndex === index ? 'fadeOut' : ''}`}>
                    <img src={card.imageSrc} className='rounded-top img-fluid mx-auto w-100' alt='project_icon' />
                  </div>
                  <div className='card-body'>
                    <div className={`heading-div text-center  ${hoveredIndex === index ? 'fadeOut' : ''}`}>
                      <h3>{card.heading}</h3>
                    </div>
                  </div>
                </>
              )}
              {hoveredIndex === index && (
                <div className={`content p-3 h-100 text-white fadeIn`}>
                  <h3 className='d-lg-none'>{card.heading}</h3>
                  <p>{card.content}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatSetsUsApart;
