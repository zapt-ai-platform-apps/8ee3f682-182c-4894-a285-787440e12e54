import React from 'react';

export default function SeoScoreCard({ score }) {
  // Determine the color based on the score
  const getColorClass = () => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLabel = () => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Average';
    return 'Needs Improvement';
  };

  return (
    <div className="card p-6 text-center flex flex-col items-center justify-center">
      <h3 className="mb-2">SEO Score</h3>
      <div className={`text-5xl font-bold ${getColorClass()} mb-2`}>
        {score}%
      </div>
      <p className={`text-sm font-medium ${getColorClass()}`}>
        {getScoreLabel()}
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 my-4">
        <div 
          className={`h-2.5 rounded-full ${score >= 80 ? 'bg-green-600' : score >= 60 ? 'bg-yellow-500' : 'bg-red-600'}`}
          style={{width: `${score}%`}}
        ></div>
      </div>
      <p className="text-sm text-gray-600">
        Based on keyword usage, structure, and optimization level.
      </p>
    </div>
  );
}