import React from "react";

function MapArea() {
  return (
    <div className="map-area">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24085.784449855444!2d28.823983392481413!3d41.00943445075141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa4b9ab06c0d7%3A0xf77b0704a5b74918!2zQmFow6dlbGlldmxlci_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1718379635287!5m2!1str!2str"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Embed"
      ></iframe>
    </div>
  );
}

export default MapArea;
