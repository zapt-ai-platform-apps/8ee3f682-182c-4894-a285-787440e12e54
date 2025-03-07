import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Amazon SEO Optimizer</h3>
            <p className="text-gray-300 text-sm">
              Optimize your Amazon product listings for maximum visibility and conversion.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Features</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>Keyword Research & Optimization</li>
              <li>Title Optimization</li>
              <li>Bullet Points & Description Enhancement</li>
              <li>Backend Search Terms Analysis</li>
              <li>Competitor Analysis</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li><a href="https://seller.amazon.com/seller-central" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Amazon Seller Central</a></li>
              <li><a href="https://advertising.amazon.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Amazon Advertising</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          &copy; {currentYear} Amazon SEO Optimizer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}