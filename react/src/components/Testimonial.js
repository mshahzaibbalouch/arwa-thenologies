import React, { useEffect, useState } from "react";
import "../css/Testimonial.css";
import { Container, Carousel, Card } from "react-bootstrap";
import axios from "axios";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/testimonials"
        );
        setTestimonial(response.data.testimonials);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div id="testimonial">
      <Container>
        <div className="testimoial-carousel my-3 px-5 rounded-4">
          <Carousel>
            {testimonial.map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <Card>
                    <Card.Body className="d-flex order-1 align-items-center justify-content-between">
                      <Card.Text>
                        <img
                          alt=""
                          src="assets/img/testimonial/quote.png"
                          className="quote-img d-block"
                        />
                        {item.description}
                        <Card.Title>{item.title}</Card.Title>
                      </Card.Text>
                      <img
                        alt={item.title}
                        src={item.image}
                        className="rounded-circle order-md-1"
                      />
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;