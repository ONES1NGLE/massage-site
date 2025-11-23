// App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import YandexMetrika from './components/YandexMetrika';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-50 to-amber-100">
      <YandexMetrika />
      <Header />
      <FloatingButtons />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;