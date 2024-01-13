import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServicesSection = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/services');
        console.log('Response:', response.data);
        setServicesData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      {servicesData.map((item) => (
        <div>
          <div className="container py-4">
            <div className="feature-header text-center">
              <div className="section-title p-0">
                <h2 className="fs-1 font-bold text-capitalize m-0 p-0 space-x-3 pb-2">{item.title}</h2>
                <p className="fs-5 px-20">{item.description}</p>
              </div>
            </div>
          </div>
          <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">
              <div className="row">
                {item.cards.map((service, index) => (
                  <div
                    key={index}
                    className="col-xl-3 col-md-6 d-flex align-items-stretch"
                    data-aos="zoom-in"
                    data-aos-delay={100 * (index + 1)}
                  >
                    <div className="icon-box p-3">
                      <div className="icon w-25">
                        <img src={service.icon} className="w-75" alt="" />
                      </div>
                      <h4><a href=".">{service.title}</a></h4>
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ))}
    </>
  );
};

export default ServicesSection;
