import React from 'react';

const services = [
  { title: 'Solutions Architecture', desc: 'Holistic system design aligned with your goals.' },
  { title: 'AI & Data Automation', desc: 'Predictive pipelines and real-time dashboards.' },
  { title: 'Blockchain & Smart Contracts', desc: 'Secure, optimized contracts & integration.' },
  { title: 'DevOps & CI/CD', desc: 'Automated deployments and infrastructure as code.' }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Our Signature Services</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {services.map((s) => (
          <div key={s.title} className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
