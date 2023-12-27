import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/WhyArwaTechnologies.css";
import ButtonStyle from "./ButtonStyle";

const WhyArwaTechnologies = () => {
  return (
    <div id="why-arwa" className="my-4">
      <Container>
        <Row>
          <Col md={6}>
            <img
              src="/assets/img/Why-arwa-1-scaled.jpg"
              alt="Why Arwa Technologies"
              className="w-100"
            />
          </Col>
          <Col md={6}>
            <h2 className="fs-1 fw-bold text-black">Why Arwa Technologies</h2>
            <p className="why-arwa-technologies-para">
              At Arwa Technologies, we help you hire top JavaScript developers,
              consultants and coders. We comprise 1300+ developers ready to
              interview and available for hire on a part-time and full-time
              basis. Our JavaScript developer fully understands JSON, jQuery And
              Handlebars. Our strategy is passionate about the language and
              willing to pursue their career. Our dedicated team is projected to
              scale your company to the next level. We prioritise translating
              higher-quality results through top Tech Talent and faster
              development.
            </p>
            <div className="w-50">
              <ButtonStyle />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyArwaTechnologies;
