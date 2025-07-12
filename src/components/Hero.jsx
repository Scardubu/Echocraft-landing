import React from 'react';
import logo from '../assets/logo.svg';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 flex flex-col justify-center items-center text-center p-6">
      <img src={logo} alt="Echocraft Logo" className="w-32 mb-6" />
      <h1 className="text-5xl font-bold text-white mb-4">
        Empowering Your Vision with Intelligent Automation
      </h1>
      <p className="text-lg text-blue-200 max-w-xl">
        From AI-driven analytics to blockchain-powered workflows, we architect and
        automate your entire stack—so you can focus on growth, not glue code.
      </p>
    </section>
  );
}
