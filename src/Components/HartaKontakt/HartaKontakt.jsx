import React from 'react';
import './HartaKontakt.css';

function HartaKontakt() {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps?q=0,0&z=2&output=embed"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
}

export default HartaKontakt;
