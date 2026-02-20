import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://customer-assets.emergentagent.com/job_my-website-210/artifacts/dwcbfc5d_Snapchat-185581794.jpg"
          alt="Taiba Caterers Professional Setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#B8860B]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#8B1538]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6 animate-fade-in">
            <Sparkles className="w-6 h-6 text-[#B8860B]" />
            <span className="text-[#B8860B] font-semibold tracking-wider uppercase">Since 2007</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Turning Your Dream Event Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#DAA520]">
              Reality
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-4 animate-fade-in-up animation-delay-200">
            Your vision, our expertise. Premium catering and exquisite decorations for weddings, 
            corporate events, and all celebrations in Mhasla.
          </p>

          <div className="text-lg text-[#B8860B] font-semibold mb-8 animate-fade-in-up animation-delay-300">
            Founded & Led by Naeem Dalvi | Established 2007
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#8B1538] hover:bg-[#6B1028] text-white px-8 py-6 text-lg group"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={scrollToGallery}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#8B1538] px-8 py-6 text-lg backdrop-blur-sm"
            >
              View Our Work
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 animate-fade-in-up animation-delay-600">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#B8860B] mb-2">500+</div>
              <div className="text-sm text-gray-300">Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#B8860B] mb-2">18+</div>
              <div className="text-sm text-gray-300">Years</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#B8860B] mb-2">100%</div>
              <div className="text-sm text-gray-300">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
