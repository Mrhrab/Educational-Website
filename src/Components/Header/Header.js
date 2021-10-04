import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import  './Header.css';


const Header = () => {
    return (
       <Navbar bg="dark" variant="dark">
    <Container>
        <h1 className="text-info mx-5 ">CPEC-5</h1>
    <Navbar.Brand><NavLink className="decoration" to="/home">Home</NavLink></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link><NavLink className="decoration" to="/services">Services</NavLink></Nav.Link>
      <Nav.Link><NavLink className="decoration" to="/activities">Activities</NavLink></Nav.Link>
      <Nav.Link><NavLink className="decoration" to="/aboutus">About Us</NavLink></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    );
};

export default Header;