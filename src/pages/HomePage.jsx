import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Optimize Your Amazon Product Listings for Maximum Visibility
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Get more organic traffic, higher rankings, and increased sales with our advanced Amazon SEO tool.
            </p>
            <Link 
              to="/optimize" 
              className="btn-primary bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-3 rounded-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Advanced Amazon SEO Features
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our intelligent algorithm analyzes your product listings and provides actionable recommendations to improve your Amazon SEO performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Keyword Research & Optimization</h3>
              <p className="text-gray-600">
                Identify high-ranking, relevant keywords for your product category and optimize their placement.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Title Optimization</h3>
              <p className="text-gray-600">
                Rewrite your product title to maximize SEO while maintaining readability and Amazon guidelines.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Bullet Points & Description Enhancement</h3>
              <p className="text-gray-600">
                Improve your bullet points and description for better keyword usage, readability, and conversion.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Backend Search Terms Analysis</h3>
              <p className="text-gray-600">
                Recommend high-value search terms that should be included in the backend to maximize coverage.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Competitor Analysis</h3>
              <p className="text-gray-600">
                Compare your product listing with top competitors and suggest ways to outrank them.
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">SEO Score & Actionable Insights</h3>
              <p className="text-gray-600">
                Get an SEO score based on keyword usage, structure, and optimization level with step-by-step recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Ready to Boost Your Amazon Sales?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Start optimizing your product listings today and see improved visibility, higher rankings, and increased sales.
            </p>
            <Link 
              to="/optimize" 
              className="btn-primary text-lg px-8 py-3 rounded-md"
            >
              Optimize Your Listing Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}