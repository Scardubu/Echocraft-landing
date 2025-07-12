import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.svg';

export default function Navbar() {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur z-50 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <img src={logo} alt="Echocraft" className="h-8" />
        <ul className="flex space-x-8">
          {['Services','Testimonials','Contact'].map((section) => (
            <li key={section} className="hover:text-accent transition">
              <Link to={section.toLowerCase()} smooth duration={500}>{section}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
