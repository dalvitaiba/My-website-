import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';
import { submitQuote } from '../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    guests: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, eventType: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await submitQuote(formData);
      toast.success(response.message);
      setFormData({
        name: '',
        phone: '',
        email: '',
        eventType: '',
        eventDate: '',
        guests: '',
        message: ''
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi, I would like to inquire about your catering and decoration services.');
    window.open(`https://wa.me/919423382328?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#8B1538]/10 px-4 py-2 rounded-full mb-6">
            <span className="text-[#8B1538] font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Plan Your{' '}
            <span className="text-[#8B1538]">Perfect Event</span>
          </h2>
          <p className="text-lg text-gray-600">
            Fill out the form below or reach us directly. We're here to make your event extraordinary!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#8B1538] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <a href="tel:9423382328" className="text-gray-600 hover:text-[#8B1538]">
                      +91 94233 82328
                    </a>
                    <br />
                    <a href="tel:9271917006" className="text-gray-600 hover:text-[#8B1538]">
                      +91 92719 17006
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#B8860B] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <a href="mailto:taibacaterers@gmail.com" className="text-gray-600 hover:text-[#8B1538]">
                      taibacaterers@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#8B1538] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Location</div>
                    <p className="text-gray-600">Mhasla, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 border-2 border-[#25D366]/20 rounded-2xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 bg-[#25D366] rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Quick Response!</h4>
                  <p className="text-sm text-gray-600">Get instant reply on WhatsApp</p>
                </div>
              </div>
              <Button
                onClick={openWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#1fb855] text-white"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-100 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Saturday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-gray-900">10:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Request Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="eventType">Event Type *</Label>
                <Select value={formData.eventType} onValueChange={handleSelectChange} required>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="birthday">Birthday Party</SelectItem>
                    <SelectItem value="anniversary">Anniversary</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="eventDate">Event Date</Label>
                  <Input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="guests">Expected Guests</Label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="100"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Additional Details</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your event..."
                  rows={4}
                  className="mt-1"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#8B1538] hover:bg-[#6B1028] text-white"
              >
                {isSubmitting ? 'Sending...' : 'Submit Request'}
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
