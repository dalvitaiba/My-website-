import React, { useState } from 'react';
import { gallery } from '../data/mock';
import { Button } from './ui/button';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Wedding', 'Catering'];
  
  const filteredGallery = selectedCategory === 'All' 
    ? gallery 
    : gallery.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#8B1538]/10 px-4 py-2 rounded-full mb-6">
            <span className="text-[#8B1538] font-semibold">Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See Our{' '}
            <span className="text-[#8B1538]">Masterpieces</span>
          </h2>
          <p className="text-lg text-gray-600">
            Browse through our collection of beautifully executed events
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={
                selectedCategory === category
                  ? 'bg-[#8B1538] hover:bg-[#6B1028] text-white'
                  : 'border-[#8B1538] text-[#8B1538] hover:bg-[#8B1538] hover:text-white'
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-xs text-[#B8860B] font-semibold mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to see more of our work?</p>
          <a href="https://www.instagram.com/taibacaterersanddecorators" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-[#8B1538] to-[#B8860B] hover:opacity-90 text-white px-8">
              Follow Us on Instagram
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
