import React from 'react';
import './Navbar.css'; // Assuming you will create this CSS file

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="./assets/images/logo.png" alt="Artshine Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">GALLERY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
