import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';

const ServiceAreas = () => {
  const areas = [
    "Mhasla", "Alibag", "Pen", "Roha", "Panvel", "Khopoli", 
    "Nagothane", "Mangaon", "Murud", "Kashid", "Revdanda",
    "Mandwa", "Tala", "Shrivardhan"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-[#8B1538]/10 px-4 py-2 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-[#8B1538]" />
              <span className="text-[#8B1538] font-semibold">Service Areas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Mhasla & Nearby Areas
            </h2>
            <p className="text-lg text-gray-600">
              Premium catering and decoration services across Raigad district and surrounding regions
            </p>
          </div>

          {/* Service Areas Grid */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-3 rounded-lg hover:bg-[#8B1538]/5 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-[#B8860B] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              <strong className="text-[#8B1538]">Based in Mhasla</strong> - We bring our expertise to your location
            </p>
            <p className="text-sm text-gray-500">
              Don't see your area? Contact us! We're happy to discuss catering services for your location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
