import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Perticle from '../../config/Perticle';
import Skill from '../Skill/Skill';
import img from "./../../images/ppy.jpg"
const Aboutme = () => {
    return (
        <div className="bg-dark" style={{backgroundSize:"cover", paddingBottom:"50px"}}>
        <div className="text-center pt-3"><h2 className="fw-bold text-light">Who <span className="text-danger">i am ?</span> </h2></div>
        <Container>
        <Row className="mt-5 g-2">
        <Col sm={12} md={6} style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
        <img src={img} width="60%" alt="" className="rounded" />
        </Col>
        <Col sm={12} md={6} className="my-auto">
        <h5 className="text-light my-3">Name : <span className="text-danger ms-2">Mridul sheikh</span></h5>
        <h5 className="text-light my-3">Age :<span className="text-danger ms-2">19</span> </h5>
        <h5 className="text-light my-3">Language : <span className="text-danger ms-2">Bangla</span></h5>
        <h5 className="text-light my-3">Religion : <span className="text-danger ms-2">Bangla</span></h5>
        <h5 className="text-light my-3">Position : <span className="text-danger ms-2">student</span></h5>
        <p className="text-light mt-5">
       <span className="fs-4 text-danger me-1">Mridul sheikh</span> is a student of class 12 in sreenagar govt. collage. He lives in Munshiganj district and Dhaka division in Bangladesh. Currently, his most preferred language is JavaScript. Apart from that, he has done demo projects with React, MongoDB, Express, Bootstrap, firebase. He is currently trying to get an internship at the company. The main purpose is to work with web-programming technology And improve her skills.
        </p>
        </Col>
        </Row>
        </Container>
        <Skill></Skill>
       </div>
    );
};

export default Aboutme;