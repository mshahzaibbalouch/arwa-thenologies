import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../css/ClientsSlider.css";
import { Container } from "react-bootstrap";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ClientsSliderSection = () => {
  const [carouselState, setCarouselState] = React.useState({});

  const clients = [
    { img: "assets/img/clints/1.png" },
    { img: "assets/img/clints/2.png" },
    { img: "assets/img/clints/3.png" },
    { img: "assets/img/clints/4.png" },
    { img: "assets/img/clints/5.png" },
    { img: "assets/img/clints/6.png" },
  ];

  return (
    <div className="clents-slider" id="clents-slider">
      <Container>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side. optional.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1400}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={200}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={carouselState.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="d-flex align-item-center"
        >
          {clients.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt="" />
            </div>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default ClientsSliderSection;
