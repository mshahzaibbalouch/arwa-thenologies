import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {useNavigate } from "react-router-dom";
import "../css/WhyArwaTechnologies.css";
import ButtonStyle from "./ButtonStyle";
import axios from "axios";

const WhyArwaTechnologies = ({ category }) => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/whyArwaTechnologies");

        const filteredData = response.data.filter(
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
    <div id="why-arwa" className="my-4">
      <Container>
        {
          data &&
          data.map((entry, index) => (
            <Row>
              <Col md={6} key={index}>
                <img src={entry.imagePath} alt={entry.title} className="w-100" />
              </Col>
              <Col md={6} key={entry._id}>
                <div>
                  <h2 className="fs-1 fw-bold text-black">{entry.title}</h2>
                  <p>{entry.content}</p>
                </div>
                <div className="w-50">
                  <ButtonStyle title={"Hire a Developer"} onClickFunction={() => navigate("/contact")}/>
                </div>
              </Col>
            </Row>
          ))}
      </Container>
    </div>
  );
};

export default WhyArwaTechnologies;
