import React from 'react';
import { Users, ChefHat, Sparkles, Clock } from 'lucide-react';
import { whyChooseUs } from '../data/mock';

const iconMap = {
  Users: Users,
  ChefHat: ChefHat,
  Sparkles: Sparkles,
  Clock: Clock
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#8B1538]/10 px-4 py-2 rounded-full mb-6">
            <span className="text-[#8B1538] font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Makes Us{' '}
            <span className="text-[#8B1538]">Different</span>
          </h2>
          <p className="text-lg text-gray-600">
            We don't just cater events, we create unforgettable experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className="group text-center hover:transform hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#8B1538] to-[#B8860B] rounded-2xl flex items-center justify-center group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8B1538] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
