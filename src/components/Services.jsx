import React from 'react';

const services = [
  { title: 'Web Development', description: 'Building modern and responsive websites.' },
  { title: 'Mobile Development', description: 'Creating mobile apps for iOS and Android.' },
  { title: 'SEO Optimization', description: 'Improving your site’s visibility on search engines.' },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-sky-50 text-center">
      <h2 className="text-3xl font-bold text-sky-600 mb-8">Our Services</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-sky-600 mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
