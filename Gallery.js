import React from 'react';
import './Gallery.css'; // Assuming you will create this CSS file

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding border-top">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title">
              <h1 className="display-4 fw-semibold">GALLERY</h1>
              <div className="line"></div>
              <p>“Art washes away from the soul the dust of everyday life.”</p>
            </div>
          </div>
        </div>
        <div className="row g-4 text-center">
          <div className="col-lg-4 col-sm-6">
            <div className="gallery theme-shadow p-lg-5 p-4">
              <img src="./images/img1.png" alt="Sketching" />
              <div>
                <h5 className="mt-4 mb-3">SKETCHING</h5>
                <p>“Sketching is a continuing source of learning rather than a string of performances.” <br /> ~Paul Laseau</p>
              </div>
            </div>
          </div>
          {/* Repeat similar structure for other gallery items */}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
