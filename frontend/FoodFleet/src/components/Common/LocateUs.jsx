import React from 'react';
import '../../index.css';

const LocateUs = () => (
  <div className="locateUs">
    <h1 style={{ color: 'orangered' }}>Our Location</h1>
    <small style={{ color: 'red', fontWeight: 'bold' }}>Internet required..</small>
    <div className="location">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2587642448775!2d77.69820641413502!3d12.955286818742959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13afc62813f9%3A0xdcf1837520b28dfa!2sJSpiders%20Marathahalli!5e0!3m2!1sen!2sin!4v1674150882329!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
    {/* Add contact details here */}
  </div>
);

export default LocateUs;
