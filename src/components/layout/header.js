import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PersonCircle } from 'react-bootstrap-icons'; // Importing a person icon
import logo from './logo.png'; // Adjust the path to correctly locate the logo.png
import './header.css'; // Import your custom CSS for additional styling

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Artshine Logo" className="logo-image" />
        </Navbar.Brand>
        <Nav className="ml-auto d-flex align-items-center"> {/* Ensure items are aligned horizontally */}
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/product">Gallery</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <NavDropdown title={<PersonCircle />} id="basic-nav-dropdown" className="ml-3">
            <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/signup">Sign Up</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
