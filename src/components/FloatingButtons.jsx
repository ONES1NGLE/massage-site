// components/FloatingButtons.jsx
import React from 'react';
import { Send, MessageCircle } from 'lucide-react';
import { contacts } from '../config/contacts';

const FloatingButtons = () => {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${contacts.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition flex items-center justify-center"
        title="Написать в WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      <a
        href={`https://t.me/${contacts.telegram}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-blue-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition flex items-center justify-center"
        title="Написать в Telegram"
      >
        <Send className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;