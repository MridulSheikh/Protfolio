import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "./Contect.css"

const Contect = () => {
    return (
        <div className="Contect">
          <Container style={{height:"100%"}}>
          <Row>
          <Col sm={12} md={6}>
          <div className="my-auto">
          <h2 className="text-light"><i className="fas fa-map-marker-alt me-2 text-danger mt-md-5 m-2"></i>Bangladesh</h2>
          <h2 className="text-light"><i className="fas fa-phone-volume me-2 text-danger mt-md-4 m-2"></i>+8801883992408</h2>
          <h4 className="text-light"><i className="fas fa-envelope me-2 text-danger mt-md-4  m-2"></i>mridul.sheikh.90@gmail.com</h4>
          </div>
          </Col>
          <Col sm={12} md={6} className="mt-5">
         <form className="my-auto">
         <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
         <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
</div>
<div class="mb-3">
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<Button variant="danger" className="w-100">submit</Button>
         </form>
          </Col>
          </Row>
          </Container>
        </div>
    );
};

export default Contect;