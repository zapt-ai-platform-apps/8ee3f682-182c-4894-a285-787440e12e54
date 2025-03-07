import React from 'react';

export default function BulletPointsOptimization({ originalBulletPoints, optimizedBulletPoints, recommendations }) {
  // Split bullet points into arrays for rendering
  const originalBullets = originalBulletPoints.split('\n').filter(bullet => bullet.trim() !== '');
  const optimizedBullets = optimizedBulletPoints.split('\n').filter(bullet => bullet.trim() !== '');

  return (
    <div className="card p-6">
      <h2 className="mb-4">Bullet Points Optimization</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-sm uppercase text-gray-500 mb-2">Original Bullet Points</h3>
          <ul className="list-disc list-inside space-y-2 p-4 bg-gray-50 rounded-md border border-gray-200 text-gray-700">
            {originalBullets.map((bullet, index) => (
              <li key={index} className="ml-2">{bullet}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm uppercase text-gray-500 mb-2">Optimized Bullet Points</h3>
          <ul className="list-disc list-inside space-y-2 p-4 bg-blue-50 rounded-md border border-blue-200 text-gray-700">
            {optimizedBullets.map((bullet, index) => (
              <li key={index} className="ml-2">{bullet}</li>
            ))}
          </ul>
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