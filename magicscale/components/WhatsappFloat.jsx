"use client";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function WhatsappFloat() {

  return (
    <FloatingWhatsApp
        phoneNumber="919311330885"
        accountName="Magicscale - Support"
        avatar="/person1.png"
        chatMessage="Hi ! How can we help you today?"
        darkMode={false}
        placeholder="Type message..."
        showPopup={true}
        zIndex={999}
        size={50}
        backgroundColor="#25d366"
    />
  )
}

export default WhatsappFloat