import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "DevCraft transformed our online presence completely. Their attention to detail and technical expertise resulted in a 300% increase in our conversion rates. Absolutely phenomenal work!",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      name: "Michael Chen",
      position: "Founder, Digital Marketing Pro",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The team delivered beyond our expectations. Our website now loads 4x faster and looks stunning on all devices. Our client engagement has improved dramatically since the launch.",
      rating: 5,
      project: "Business Website Redesign"
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, GrowthCorp",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Professional, responsive, and incredibly skilled. They built us a custom web application that streamlined our entire workflow. The ROI has been incredible!",
      rating: 5,
      project: "Custom Web Application"
    },
    {
      name: "David Thompson",
      position: "Owner, Local Retail Chain",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "From concept to launch, DevCraft handled everything seamlessly. Our online store now processes 10x more orders than before. Their support is exceptional!",
      rating: 5,
      project: "E-commerce Solution"
    },
    {
      name: "Lisa Park",
      position: "Creative Director, Design Studio",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "They brought our creative vision to life with pixel-perfect precision. The website not only looks amazing but performs flawlessly. Highly recommend their services!",
      rating: 5,
      project: "Portfolio Website"
    },
    {
      name: "James Wilson",
      position: "VP Technology, InnovateTech",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Exceptional technical skills and project management. They delivered a complex web platform on time and within budget. The quality of code is outstanding!",
      rating: 5,
      project: "SaaS Platform Development"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-100" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-xs text-blue-600 font-medium mt-1">{testimonial.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white rounded-lg p-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">200+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">99%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;