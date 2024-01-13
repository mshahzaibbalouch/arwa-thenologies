import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../css/HowWeWork.css";
import axios from "axios";

const HowWeWork = () => {
  const [howwework, setHowwework] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/api/howwework");
      setHowwework(response.data);
      console.log("How we work data is : ");
      console.log(howwework);
    };

    fetchData();
  }, []);

  return (
    <Container id="how-we-work" className="py-4">
      {howwework.map((item) => {
        return (
          <Row className="align-items-center">
            <Col md={6}>
              <div className="section-title text-start">
                <h2 className="fs-1 font-bold text-capitalize font-sans my-3 space-x-3">
                  {item.title}
                </h2>
                <ul className="fs-5 px-20">
                  <li className="ps-3">{item.text1}</li>
                  <li className="ps-3">{item.text2}</li>
                  <li className="ps-3">{item.text3}</li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <Image src="assets/img/work.png" alt="" className="img-fluid h-50" />
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default HowWeWork;
