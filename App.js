import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Global styles

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Gallery />
      <Contact />
    </>
  );
};

export default App;
