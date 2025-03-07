import React from 'react';

export default function ActionableInsights({ insights }) {
  return (
    <div className="card p-6">
      <h2 className="mb-4">Actionable Insights</h2>
      
      <div className="space-y-4">
        {insights.map((category, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
            <h3 className="text-md font-medium mb-3">{category.category}</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="pl-2">
                  <span className="font-medium text-gray-900">{item.title}: </span>
                  {item.description}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}