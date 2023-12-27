import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ButtonStyle from "./ButtonStyle";
import ClientsSliderSection from "./ClientsSliderSection";

import "../css/Header.css";
import axios from "axios";

const CarouselComponent = ({category}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/hero");
        console.log(response.data);
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchHeroData();
  }, []);

  return (
    <Carousel interval={800} fade>
      {data.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <div className="row">
              <div
                className="col-lg-5 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h1 className="fs-2">{item.title}</h1>
                <h3>{item.description}</h3>
                <div className="w-50 mb-3">
                  <ButtonStyle title={"Hire a Pro"} />
                </div>
              </div>
              <div
                className="col-lg-7 mt-3 order-1 order-lg-2 hero-img"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img
                  src={item.image}
                  className="img-fluid mt-5 float-end"
                  alt={item.name}
                />
                <Carousel.Caption>
                  <h4 className="text-dark text-start">{item.name}</h4>
                  <p className="text-dark text-start">{item.role}</p>
                </Carousel.Caption>
              </div>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

function HeroSection({category}) {
  return (
    <section id="hero" className="d-flex align-items-center p-0">
      <div className="container">
        <CarouselComponent category={category} />
      </div>
    </section>
  );
}

export default HeroSection;
