import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky="top" style={{backgroundColor:"#000"}} variant="dark">
  <Container>
  <Navbar.Brand href="#home" className="fs-2">Profi<span style={{color:"red"}}>le.</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link as={NavLink} activeStyle={{color:"red",borderBottom:"3px solid red"}} exact className="mx-md-3" to="/" >Home</Nav.Link>
      <Nav.Link as={NavLink} activeStyle={{color:"red",borderBottom:"3px solid red"}} className="mx-md-3" to="/About" >About</Nav.Link>
      <Nav.Link as={NavLink} activeStyle={{color:"red",borderBottom:"3px solid red"}} className="mx-md-3" to="/Project" >Project</Nav.Link>
      <Nav.Link as={NavLink} activeStyle={{color:"red",borderBottom:"3px solid red"}} className="mx-md-3" to="/contect" >Contect me</Nav.Link>
    </Nav>
    <Nav>
      <a href="https://github.com/MridulSheikh" target="_blank"><i className="fab fa-github fs-3 text-light mx-md-3 mt-1"></i></a>
      <a href="https://www.linkedin.com/in/mridul-sheikh-838b42226/" target="_blank"><i className="fab fa-linkedin fs-3 text-light mx-md-3 mt-1"></i></a>
      <a href="https://twitter.com/MridulSheikh8" target="_blank"><i className="fab fa-twitter-square fs-3 text-light mx-md-3 mt-1"></i></a>
      <a href="https://drive.google.com/file/d/1l-9NkE1MzbDS0F8H46PUUvqs7kOipMGv/view" target="_blank" className="mx-md-4"> <button className="bg-danger text-light rounded border-0 py-2">Resume<i class="fas fa-download s-3 text-light mx-2"></i></button> </a>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;