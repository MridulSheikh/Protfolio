import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "./Home.css";
import img from"../../images/person.png"
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
           <Container>
           <Row>
           <Col sm={12} md={6} className="text-center">
           <img src={img} alt="" width="70%" />
           </Col>
           <Col sm={12} md={6}>
           <div className="home-box">
           <h1  className="text-light mb-4 ms-5"> Hello,</h1>
           <h1 className="text-light fw-bold ms-5">My Name is <span className="text-danger">Mridul sheikh</span></h1>
           <h2 className="fw-light ms-5 mt-4">And i'm a full stack developer</h2>
           <Link to="/contect">
           <Button variant="danger mt-3 ms-5">Contact me</Button>
           </Link>
           </div>
           </Col>
           </Row>
           </Container>
        </div>
    );
};

export default Home;