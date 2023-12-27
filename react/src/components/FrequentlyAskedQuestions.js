import React, { useEffect, useState } from "react";
import { Accordion, Col, Row, Container } from "react-bootstrap";
import "../css/FrequentlyAskedQuestions.css";
import axios from "axios";

const FrequentlyAskedQuestions = () => {
  const [faqData, setFaqData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/faq");
        setFaqData(response.data.data);
        console.log(faqData);
      } catch (err) {
        console.log("Error in fetching data");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="mt-5" id="faq">
      <Container>
        <div className="section-title text-center">
          <h2 className="fs-1 font-bold text-capitalize font-sans my-3 space-x-3">
            Want to Know More?
          </h2>
          <p>
            Explore the following FAQs to attain relevant information concerning
            different aspects of our company, products and services. Feel free
            to contact us for further information.
          </p>
        </div>
        <Row>
          <Col>
            <Accordion defaultActiveKey="false" className="shadow">
              {faqData.map((item, index) => (
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>
                    <b className="fs-1 pe-4">{index + 1}</b>
                    {item.questions}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>{item.answer}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FrequentlyAskedQuestions;
