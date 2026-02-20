import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import ServiceAreas from './components/ServiceAreas';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <ServiceAreas />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
