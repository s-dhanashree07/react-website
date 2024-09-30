import React from 'react';
import './Home.css'; // Assuming you will create this CSS file

const Home = () => {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-uppercase text-white fw-semibold display-1">Welcome to Artshine</h1>
            <h4 className="text-white mt-3 mb-4">
              <i>“Art is not what you see, but what you make others see.” <br /> ~Edgar Degas</i>
            </h4>
            <button className="btn" onClick={() => window.location.href='https://www.instagram.com'}>
              <i className="fa fa-instagram"> </i>&nbsp;&nbsp;SAY HELLO TO ART!!!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
