import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6 bg-dark text-gray-400 text-center text-sm">
      <div className="container mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Echocraft Automations. All rights reserved.</p>
      </div>
    </footer>
  );
}
