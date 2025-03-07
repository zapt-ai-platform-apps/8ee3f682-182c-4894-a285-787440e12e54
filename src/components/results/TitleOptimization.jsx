import React from 'react';

export default function TitleOptimization({ originalTitle, optimizedTitle, recommendations }) {
  return (
    <div className="card p-6">
      <h2 className="mb-4">Title Optimization</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-sm uppercase text-gray-500 mb-2">Original Title</h3>
          <p className="p-4 bg-gray-50 rounded-md border border-gray-200 text-gray-700">
            {originalTitle}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {originalTitle.length} characters (max 200)
          </p>
        </div>
        
        <div>
          <h3 className="text-sm uppercase text-gray-500 mb-2">Optimized Title</h3>
          <p className="p-4 bg-blue-50 rounded-md border border-blue-200 text-gray-700">
            {optimizedTitle}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {optimizedTitle.length} characters (max 200)
          </p>
        </div>
      </div>
      
      <div>
        <h3 className="text-md font-medium mb-2">Recommendations</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}