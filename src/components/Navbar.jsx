import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=32&height=32" 
                alt="Amazon SEO Optimizer Logo" 
                className="h-8 w-8 mr-2"
              />
              <span className="font-bold text-lg text-blue-700">Amazon SEO Optimizer</span>
            </Link>
          </div>
          <nav className="flex">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/optimize" className="px-3 py-2 text-gray-700 hover:text-blue-600">Optimize</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}