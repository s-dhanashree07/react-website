// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './footer.css'; // Import a CSS file for additional styling if needed

const Footer = () => {
  return (
    <footer className="footer">
    {/* // <footer className="bg-dark text-white text-center py-3 footer"> */}
      <Container>
        <Row>
          <Col md={6} className="text-md-left">
            <p>&copy; 2024 Artshine. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-right">
            <div className="social-media">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
