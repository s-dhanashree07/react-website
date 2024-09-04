import React from 'react';
import { MdMail, MdPerson, MdRocket } from 'react-icons/md'; // Import icons from react-icons
import './about.css'; // Import the CSS file

const AboutSection = () => {
  return (
    <>
      <section id="about" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title">
                <h1 className="display-4 fw-semibold">ABOUT US</h1>
                <div className="line"></div>
                <p>
                  Art, adventure, love and life meander and merge during my creative process where I explore the playful, loving, light-filled moments alongside the dark murky places in my raw and refined art.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <img src="https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?cs=srgb&dl=pexels-steve-1047540.jpg&fm=jpg" alt="About Us" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <div className="d-flex flex-column align-items-start">
                <div className="d-flex pt-4 mb-3">
                  <div className="iconbox me-4">
                    <MdMail size={24} />
                  </div>
                  <div>
                    <h5>BIO</h5>
                    <p className="work-text">
                      Art, adventure, love and life meander and merge during my creative process where I explore the playful, loving, light-filled moments alongside the dark murky places in my raw and refined art.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="iconbox me-4">
                    <MdPerson size={24} />
                  </div>
                  <div>
                    <h5>SKILLS</h5>
                    <p>
                      I have a lot of skills and I am very good at them. I am very good at art and I am always looking for new skills.
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="iconbox me-4">
                    <MdRocket size={24} />
                  </div>
                  <div>
                    <h5>ART-WORK</h5>
                    <p>
                      I have worked on many arts and I am very proud of them. I am a very good artist and I am always looking for new arts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Section */}
      <section id="additional-info" className="section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="display-4">More About Us</h2>
              <div className="line"></div>
              <p>
                We are passionate about art and its ability to inspire and transform. Our journey is filled with diverse experiences and creative endeavors that shape who we are and what we do. We believe in pushing boundaries, embracing innovation, and continuously evolving as artists and individuals.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <h3>Our Philosophy</h3>
              <p>
                Art is not just a practice; it is a way of life. We approach each project with an open mind and a heart full of curiosity. Our creative process involves exploring new ideas, techniques, and perspectives, aiming to create meaningful and impactful work.
              </p>
            </div>
            <div className="col-lg-6">
              <h3>Our Mission</h3>
              <p>
                Our mission is to connect with people through art, to evoke emotions, and to spark conversations. We strive to make art accessible to everyone and to foster a community where creativity and expression are celebrated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;

