import React from 'react';
import '../css/Rescue.css';
import { Container, Card, Col } from 'react-bootstrap';
import ButtonStyle from './ButtonStyle';

const Rescue = () => {
    return (
        <div id="rescue" className='my-4'>
            <Container>
                <div className='rescue-card my-3 px-5 rounded-4'>
                    <Card className='rescue border-0'>
                        <Card.Body className="row align-items-center justify-content-between">
                            <Card.Text className="col-lg-9">
                                <Card.Title>Rescue your company’s growth!</Card.Title>
                                <p> Let us know about your business plans on an introductory call, and we’ll lead the matching process.</p>
                            </Card.Text>
                            <Col lg={3} md={4} sm={6}>
                            <ButtonStyle title={"Hire a Pro"} onChlickFunction='#' />
                            </Col>

                        </Card.Body>

                    </Card>
                </div>
            </Container>
        </div>
    )
}

export default Rescue;