import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-gray-400 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Echocraft Automations. All rights reserved.</p>
    </footer>
  );
}
