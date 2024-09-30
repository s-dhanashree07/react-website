import React from 'react';
import './Contact.css'; // Assuming you will create this CSS file
import contactImage from './images/contact.png';

const Contact = () => {
  return (
    <section className="section-padding bg-light" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title">
              <h1 className="display-4 text-white fw-semibold">GET IN TOUCH</h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form action="#" className="row g-3 p-lg-5 p-4 bg-white theme-shadow">
              <div className="form-group col-lg-6">
                <input type="text" className="form-control" placeholder="Enter first name" />
              </div>
              <div className="form-group col-lg-6">
                <input type="text" className="form-control" placeholder="Enter last name" />
              </div>
              <div className="form-group col-lg-12">
                <input type="email" className="form-control" placeholder="Enter Email" />
              </div>
              <div className="form-group col-lg-12">
                <input type="text" className="form-control" placeholder="Enter subject" />
              </div>
              <div className="form-group col-lg-12">
                <textarea name="message" rows="5" className="form-control" placeholder="Enter Message"></textarea>
              </div>
              <div className="form-group col-lg-12 d-grid">
                <button className="btn btn-brand">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
