import React from 'react';
import './About.css'; // Assuming you will create this CSS file

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title">
              <h1 className="display-3 fw-semibold">ABOUT US</h1>
              <div className="line"></div>
              <p>Art, adventure, love and life meander and merge during my creative process where I explore the playful, loving, light-filled moments alongside the dark murky places in my raw and refined art</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <img src="./images/about.png" alt="About Artshine" />
          </div>
          <div className="col-lg-5">
            <div className="d-flex pt-4 mb-3">
              <div className="iconbox me-4">
                <i className="ri-mail-send-fill"></i>
              </div>
              <div>
                <h5>BIO</h5>
                <p className="work-text">Art, adventure, love and life meander and merge during my creative process where I explore the playful, loving, light-filled moments alongside the dark murky places in my raw and refined art</p>
              </div>
            </div>
            <div className="d-flex mb-3">
              <div className="iconbox me-4">
                <i className="ri-user-5-fill"></i>
              </div>
              <div>
                <h5>SKILLS</h5>
                <p>I have a lot of skills and I am very good at them. I am very good at art and I am always looking for new skills.</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="iconbox me-4">
                <i className="ri-rocket-2-fill"></i>
              </div>
              <div>
                <h5>ART-WORK</h5>
                <p>I have worked on many arts and I am very proud of them. I am a very good artist and I am always looking for new arts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
