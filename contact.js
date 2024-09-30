// import React from 'react';
// import './contact.css'; 
// import emailjs from 'emailjs-com';

// const Contact = () => {
//   return (
//     <div className="contact-container">
//       <div className="form-container">
//         <h2>Contact Form</h2>
//         <form>
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input type="text" id="name" name="name" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" name="email" required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">Phone</label>
//             <input type="tel" id="phone" name="phone" />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea id="message" name="message" rows="4" required></textarea>
//           </div>
//           <button type="submit">Send</button>
//         </form>
//       </div>
//       <div className="map-container">
//         <h2>Our Location</h2>
//         <iframe
//           title="Location Map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202907.66417223497!2d72.87592847803482!3d19.094461218206906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1725392883603!5m2!1sen!2sin"
//           width="100%"
//           height="400"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const [formValues, setFormValues] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    let isValid = true;

    if (!formValues.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formValues.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!formValues.message) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      setLoading(true);
      setSuccessMessage('');
      try {
        await emailjs.sendForm('service_xf2ukog', 'template_enntprq', e.target, 'RjubjWVjJllxAXn--');
        setSuccessMessage('Email sent successfully!');
        setFormValues({ name: '', email: '', phone: '', message: '' });
      } catch (error) {
        console.error('Email sending error:', error);
        setSuccessMessage('Failed to send email. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="contact-container">
      <div className="form-container">
        <h2>Contact Form</h2>
        {successMessage && <div className="success-message">{successMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              required
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formValues.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && <div className="error-message">{errors.message}</div>}
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
      <div className="map-container">
        <h2>Our Location</h2>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202907.66417223497!2d72.87592847803482!3d19.094461218206906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1725392883603!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;


