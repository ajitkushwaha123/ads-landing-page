import React from "react";

const WhatsAppFloatingIcon = () => {
  // Pre-written message
  const message = encodeURIComponent(
    "Hello! I would like to know more about your services."
  );

  return (
    <a
      href={`https://wa.me/919311330885?text=${message}`} // Include the pre-written message
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transform transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <img className="w-8 z-100 h-8" src="/whatsapp.png" alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppFloatingIcon;
