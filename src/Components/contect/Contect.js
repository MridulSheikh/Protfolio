import React, { useRef } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com'
import "./Contect.css"

const Contect = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0zbw0eg', 'template_ihxwnyh', form.current, 'user_3QOJJhtYYRYzJ6H3Fv1Xv')
      .then((result) => {
          console.log(result.text);
          if(result.text){
            alert("wating for response")
          }
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
    return (
        <div className="Contect">
          <Container style={{height:"100%"}}>
          <Row >
          <Col sm={12} md={6}>
          <div className="mt-md-5">
          <h2 className="text-light"><i className="fas fa-map-marker-alt me-3 text-danger mt-md-5 m-2"></i>Dhaka, Bangladesh</h2>
          <h2 className="text-light"><i className="fas fa-phone-volume me-3 text-danger mt-md-4 m-2"></i>+8801883992408</h2>
          <h4 className="text-light"><i className="fas fa-envelope me-3 text-danger mt-md-4  m-2"></i>mridul.sheikh.90@gmail.com</h4>
          </div>
          </Col>
          <Col sm={12} md={6} className="mt-5">
          <form  ref={form} onSubmit={sendEmail}>
          <label className="d-block w-100 my-3">Name</label>
          <input className="d-block w-100 my-3 p-2 border-0 rounded outline-primary" type="text" name="user_name" />
          <label className="d-block w-100 my-3">Email</label>
          <input className="d-block w-100 my-3 p-2 border-0 rounded" type="email" name="user_email" />
          <label className="d-block w-100 my-3">subject</label>
          <input className="d-block w-100 my-3 p-2 border-0 rounded" type="textl" name="subject" />
          <label className="d-block w-100 my-3">Message</label>
          <textarea className="d-block w-100 my-3 rounded" name="message" />
          <input className="d-block w-100 my-3 py-2 rounded border-0 text-light bg-danger" type="submit" value="Send" />
        </form> 
          </Col>
          </Row>
          </Container>
        </div>
    );
};

export default Contect;