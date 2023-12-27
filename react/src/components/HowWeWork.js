import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../css/HowWeWork.css';

const HowWeWork = () => {
  return (
    <Container id="how-we-work">
      <Row className="align-items-center">
        <Col md={6}>
          <div className="section-title text-start">
            <h2 className="fs-1 font-bold text-capitalize font-sans my-3 space-x-3">How We Work</h2>
            <ul className="fs-5 px-20">
              <li>
                Develop Clean, clear, high-quality production code Make code reviews a snap.
              </li>
              <li>

                Design relevant unit and integration tests Ensure your features work the way you intended.
              </li>
              <li>
                Work with your embedded team. We’re part of your stand ups, slack channels and inside jokes.
              </li>
            </ul>
          </div>
        </Col>
        <Col md={6}>
          <Image src="assets/img/work.png" alt="" className='img-fluid' />
        </Col>
      </Row>
    </Container>
  )
}

export default HowWeWork