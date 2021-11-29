import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const Skill = () => {
    return (
        <Container className="text-light pt-5">
        <h1 className="text-light text-center mt-5">My <span className="text-danger">Skill</span></h1>
          <Row className="mt-5">
          <Col sm={12} md={6} className="mt-5">
         <ul style={{listStyle: "revert"}}>
         <li className="fs-3 my-2">Node.js</li>
         <li className="fs-3 my-2">Express</li>
         <li className="fs-3 my-2">Mongodb</li>
         <li className="fs-3 my-2">Bootstrap</li>
         <li className="fs-3 my-2">React</li>
         </ul>
          </Col>
          <Col sm={12} md={6}>
          <div className="d-flex text-center my-5">
          <span>HTML</span>
          <div className="mx-2 mt-2" style={{width:"100%", height:"10px", backgroundColor:"#FFF", borderRadius:"10px"}}>
          <div className="bg-danger" style={{width:"50%", height:"100%", borderRadius:"10px"}}>
          </div>
          </div>
          50%
          </div>
          <div className="d-flex ms-3">
          <span>css</span>
          <div className="mx-2 mt-2" style={{width:"100%", height:"10px", backgroundColor:"#FFF", borderRadius:"10px"}}>
          <div className="bg-danger" style={{width:"30%", height:"100%", borderRadius:"10px"}}>
          </div>
          </div>
          30%
          </div>
          <div className="d-flex mt-5">
          <span>javascript</span>
          <div className="mx-2 mt-2" style={{width:"100%", height:"10px", backgroundColor:"#FFF", borderRadius:"10px"}}>
          <div className="bg-danger" style={{width:"35%", height:"100%", borderRadius:"10px"}}>
          </div>
          </div>
          35%
          </div>
          <div className="d-flex mt-5">
          <span>React</span>
          <div className="mx-2 mt-2" style={{width:"100%", height:"10px", backgroundColor:"#FFF", borderRadius:"10px"}}>
          <div className="bg-danger" style={{width:"35%", height:"100%", borderRadius:"10px"}}>
          </div>
          </div>
          35%
          </div>
          </Col>
          </Row>
        </Container>
    );
};

export default Skill;