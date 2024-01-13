import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HireSkilledProgrammer({category}) {
  const [apiData, setApiData] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/hireskilled'); 
        const filteredData = response.data.filter(
          (item) => item.category === category
        );
        setApiData(filteredData);
        console.log(filteredData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <div className='container'>
        {apiData.map((item, index) => (
          <div className='row mt-5' key={index}>
            <div className='col-lg-6'>
              <img src={item.image} alt='hire-now' className='img-fluid' />
            </div>
            <div className='col-lg-6'>
              <div className='ms-md-5'>
                <h2>{item.title}</h2>
                <div className="">
                  <p>{item.description}</p>
                  <p>{item.following}</p>
                  <ul>
                    {item.reasons.map((reason, reasonIndex) => (
                      <li key={reasonIndex}>{reason}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HireSkilledProgrammer;
