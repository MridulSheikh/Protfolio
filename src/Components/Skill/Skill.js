import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const Skill = () => {
    return (
        <Container className="text-light pt-5">
        <h1 className="text-light text-center mt-5">My <span className="text-danger">Skill</span></h1>
          <Row className="mt-5 rounded">
          <Col sm={12} md={6} className="mt-0">
         <ul style={{listStyle:"none"}}> 
         <li className="fs-1 my-2"><i className="fab fa-node-js me-2 text-success"></i>Node.js</li>
         <li className="fs-1 my-2"><i className="fab fa-node-js me-2 text-danger"></i>Express</li>
         <li className="fs-1 my-2"><i class="fab fa-envira me-2 text-success"></i>Mongodb</li>
         <li className="fs-1 my-2"><i className="fas fa-bold me-2" style={{color:"#ff00ff"}}></i>Bootstrap</li>
         <li className="fs-1 my-2"><i className="fab fa-react me-2 text-info"></i>React</li>
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