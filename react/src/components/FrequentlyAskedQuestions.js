import React, { useEffect, useState } from "react";
import { Accordion, Col, Row, Container } from "react-bootstrap";
import "../css/FrequentlyAskedQuestions.css";
import axios from "axios";

const FrequentlyAskedQuestions = ({ category }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = `http://localhost:5000/api/faq`;
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        const filteredData = response.data.data.filter(
          (item) => item.category === category
        );
        setData(filteredData);
        console.log(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div className="mt-5" id="faq">
      <Container>
        {data.map((item, index) => (
          <div>
            <div className="section-title text-center">
              <h2 className="fs-1 font-bold text-capitalize font-sans my-3 space-x-3">
                {item.title}
              </h2>
              <p>{item.description}</p>
            </div>

            <Accordion defaultActiveKey="false" className="shadow">
              <Row>
                <Col md={6}>
                  {item.questions
                    .filter((_, index) => index < item.questions.length / 2)
                    .map((filteredItem, index) => {
                      return (
                        <Accordion.Item eventKey={index} key={index}>
                          <Accordion.Header>
                            <b className="fs-1 pe-4 me-2">{index + 1}</b>
                            <b className="fs-4">{filteredItem.question}</b>
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>{filteredItem.answer}</p>
                          </Accordion.Body>
                        </Accordion.Item>
                      );
                    })}
                </Col>
                <Col md={6}>
                  {item.questions
                    .filter(
                      (filteredItem, index) =>
                        index >= item.questions.length / 2
                    )
                    .map((filteredItem, index) => (
                      <Accordion.Item
                        eventKey={index + item.questions.length / 2 + 1}
                        key={index}
                      >
                        <Accordion.Header>
                          <b className="fs-1 pe-4 me-2">
                            {Math.round(index + item.questions.length / 2 + 1)}
                          </b>
                          <b className="fs-4">{filteredItem.question}</b>
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>{filteredItem.answer}</p>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                </Col>
              </Row>
            </Accordion>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default FrequentlyAskedQuestions;
