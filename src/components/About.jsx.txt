import React from 'react';
import { Award, Heart, Users, Sparkles } from 'lucide-react';
import { stats } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://customer-assets.emergentagent.com/job_my-website-210/artifacts/s6nizb6b_1771511626262.jpg"
                alt="Taiba Caterers Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#8B1538] rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#8B1538]">18+ Years</div>
                  <div className="text-sm text-gray-600">Of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#8B1538]/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-[#8B1538]" />
              <span className="text-[#8B1538] font-semibold">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Crafting Memorable Experiences Since{' '}
              <span className="text-[#8B1538]">2007</span>
            </h2>

            <div className="bg-gradient-to-r from-[#8B1538]/10 to-[#B8860B]/10 border-l-4 border-[#8B1538] p-6 rounded-lg mb-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="text-2xl font-bold text-[#8B1538]">Naeem Dalvi</div>
                <span className="text-sm text-gray-600">- Founder & Owner</span>
              </div>
              <p className="text-gray-700 italic">
                "Every event is a canvas, and we paint it with passion, dedication, and years of expertise."
              </p>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              <strong>Taiba Caterers and Decorators</strong> has been the trusted name in Mhasla for creating 
              extraordinary events. Founded and led by <strong>Naeem Dalvi</strong>, our passionate team 
              of over 50 professionals combines culinary excellence with artistic decoration to bring your vision to life.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From intimate gatherings to grand celebrations, we handle every detail with 
              precision and care. Our commitment to quality ingredients, innovative designs, 
              and personalized service has made us the preferred choice for over 500 successful events.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-[#B8860B]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-[#B8860B]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Passionate Team</h4>
                  <p className="text-sm text-gray-600">Dedicated professionals who love what they do</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-[#8B1538]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-[#8B1538]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">50+ Team Members</h4>
                  <p className="text-sm text-gray-600">Skilled experts at your service</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[#8B1538] mb-1">{stat.number}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
