import React, { useState, useEffect } from "react";
import axios from "axios";
import '../css/Rescue.css';
import { Container, Card, Col } from 'react-bootstrap';
import {useNavigate } from "react-router-dom";
import ButtonStyle from './ButtonStyle';

const Rescue = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = `http://localhost:5000/api/rescue`;
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

    return (
        <div id="rescue" className='my-4'>
            <Container>
            {data.map((item, index) => (
                <div className='rescue-card my-3 px-5 rounded-4'>
                    <Card className='rescue border-0'>
                        <Card.Body className="row align-items-center justify-content-between">
                            <Card.Text className="col-lg-9">
                                <Card.Title>{item.title}</Card.Title>
                                <p>{item.description}</p>
                            </Card.Text>
                            <Col lg={3} md={4} sm={6}>
                            <ButtonStyle title={"Hire a Pro"} onClickFunction={() => navigate("/contact")} />
                            </Col>
                        </Card.Body>

                    </Card>
                </div>
                ))}
            </Container>
        </div>
    )
}

export default Rescue;