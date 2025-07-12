import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from './animations';
import { Code, Database, Shield, Cloud } from 'lucide-react';

const services = [
  { icon: Code, title: 'Architecture', desc: 'Blueprints to scale.' },
  { icon: Database, title: 'Data Automation', desc: 'From raw to insight.' },
  { icon: Shield, title: 'Smart Contracts', desc: 'Secure & auditable.' },
  { icon: Cloud, title: 'DevOps', desc: 'CI/CD & infra as code.' },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      className="container mx-auto py-20 px-6"
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-dark">Signature Services</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition"
            variants={fadeUp}
          >
            <Icon className="mx-auto mb-4 text-accent" size={48} />
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
