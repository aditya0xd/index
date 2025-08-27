import React from "react";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Zap,
  Database,
  Search,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Custom Web Development",
      description:
        "Tailored websites and web applications built with modern technologies like React, Next.js, and TypeScript for optimal performance and user experience.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Modern Framework",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Responsive designs that look perfect on all devices. We prioritize mobile experience to ensure your users have seamless interactions across platforms.",
      features: [
        "Mobile Responsive",
        "Touch Optimized",
        "Cross-Platform",
        "Progressive Web Apps",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description:
        "Complete online store solutions with secure payment integration, inventory management, and user-friendly admin panels to boost your sales.",
      features: [
        "Payment Integration",
        "Inventory Management",
        "Order Tracking",
        "Analytics Dashboard",
      ],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Lightning-fast websites with optimized code, image compression, and caching strategies. We ensure your site loads quickly and ranks well.",
      features: [
        "Speed Optimization",
        "Code Splitting",
        "Image Optimization",
        "CDN Integration",
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Robust server-side solutions with secure APIs, database design, and cloud integration to power your web applications reliably.",
      features: [
        "API Development",
        "Database Design",
        "Cloud Integration",
        "Security Implementation",
      ],
    },
    {
      icon: Search,
      title: "SEO & Analytics",
      description:
        "Comprehensive SEO strategies and analytics setup to improve your search rankings and track your website's performance effectively.",
      features: [
        "SEO Optimization",
        "Google Analytics",
        "Performance Tracking",
        "Conversion Optimization",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive web development services to help your
            business thrive in the digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-transparent transform rounded-xl shadow-lg border border-gray-100 p-8 hover:bg-purple-50 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
