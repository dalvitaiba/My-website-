import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mock';
import { Card, CardContent } from './ui/card';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/34793912/pexels-photo-34793912.jpeg"
          alt="Happy Celebration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B1538]/95 via-[#8B1538]/90 to-[#B8860B]/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-white font-semibold">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/90">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="bg-white/95 backdrop-blur-sm border-none hover:bg-white hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-[#B8860B] mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#B8860B] text-[#B8860B]" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>

                {/* Client Info */}
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.event}</div>
                  <div className="text-xs text-gray-500 mt-1">{testimonial.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
