import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from './animations';
import bg from '../assets/hero-bg.jpg';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{ background: `url(${bg}) center/cover no-repeat` }}
    >
      <div className="absolute inset-0 bg-dark/60"></div>
      <motion.div
        className="container mx-auto relative z-10 text-center text-white py-40 px-6"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
      >
        <h1 className="text-6xl font-extrabold mb-4">Echo Your Vision in Code</h1>
        <p className="text-xl mb-8">
          We build AI, blockchain, and automation pipelines that elevate your business.
        </p>
        <motion.a
          href="#services"
          className="inline-block px-10 py-4 bg-accent rounded-full font-semibold hover:bg-accent/90 transition"
          whileHover={{ scale: 1.05 }}
        >
          Explore Services
        </motion.a>
      </motion.div>
    </section>
  );
}
