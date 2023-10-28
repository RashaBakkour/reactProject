import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbars.css';


const Navbars = () => {
  return (
    <div>
        <Navbar expand="lg" >
            <Container>
            <Navbar.Brand href="#home"><h1>Vesperr</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar">
                  <ul>
                    <li>
                      <Link to="/home" className='active'>Home</Link>
                    </li>
                    <li>
                      <Link to="/about" >About</Link>
                    </li>
                    <li>
                      <Link to="/services" >Services</Link> 
                    </li>
                    <li>
                      <Link to="/contact" >Contact</Link>
                    </li>
                  </ul>
                    
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );
}

export default Navbars;
