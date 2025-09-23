import React from 'react';
import './HartaHome.css';

function HartaHome() {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.9272862674356!2d19.8304752!3d41.3321945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350314e95d95d2d%3A0xf9c698b4da912186!2sRruga%20Hoxha%20Tahsim%2C%20Tiran%C3%AB!5e0!3m2!1sen!2s!4v1758531197553!5m2!1sen!2s"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
}

export default HartaHome;
