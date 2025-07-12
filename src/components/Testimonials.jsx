import React from 'react';
import { motion } from 'framer-motion';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

SwiperCore.use([Pagination, Autoplay]);
const feedback = [
  { quote: 'Transformed our data ops.', author: 'Lead Engineer, Sports Analytics' },
  { quote: 'Smart contracts rock-solid.', author: 'CTO, DeFi Startup' },
  { quote: 'CI/CD set up was seamless.', author: 'Product Manager, SaaS' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Clients Say</h2>
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
        >
          {feedback.map((f, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="bg-white p-10 rounded-lg shadow-lg max-w-xl mx-auto text-center"
                whileHover={{ scale: 1.02 }}
              >
                <p className="italic mb-4">“{f.quote}”</p>
                <p className="font-semibold">— {f.author}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
