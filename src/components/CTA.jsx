import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from './animations';

export default function CTA() {
  return (
    <motion.section
      className="bg-accent text-white text-center py-16 px-6"
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
    >
      <h2 className="text-3xl font-bold mb-4">Ready to Automate Excellence?</h2>
      <p className="mb-6 max-w-md mx-auto">
        Partner with us to build resilient systems, ship faster releases, and automate your core processes.
      </p>
      <motion.a
        href="#"
        className="inline-block px-10 py-4 bg-white text-accent rounded-full font-semibold hover:bg-white/90 transition"
        whileHover={{ scale: 1.05 }}
      >
        Schedule Your Free Audit
      </motion.a>
    </motion.section>
  );
}
