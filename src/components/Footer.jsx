// components/Footer.jsx
import React from 'react';
import { Sparkles } from 'lucide-react';
import { siteData } from '../config/contacts';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-6 h-6 text-amber-400" />
          <span className="text-xl font-light">{siteData.title}</span>
        </div>
        <p className="text-gray-400 mb-6">{siteData.tagline}</p>
        <p className="text-sm text-gray-500">© 2025 Все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer;