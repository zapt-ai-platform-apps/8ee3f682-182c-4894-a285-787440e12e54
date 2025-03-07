import React from 'react';

export default function CompetitorAnalysis({ competitorAsin, analysis }) {
  return (
    <div className="card p-6">
      <h2 className="mb-4">Competitor Analysis - ASIN: {competitorAsin}</h2>
      
      <div className="mb-6">
        <h3 className="text-md font-medium mb-3">Keyword Comparison</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Metric
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Your Listing
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Competitor
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Comparison
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {analysis.keywordComparison.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.metric}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.yourListing}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.competitor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 py-1 text-xs rounded-full ${getComparisonClass(item.comparison)}`}>
                      {item.comparison}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-md font-medium mb-3">Competitor's Unique Keywords</h3>
        <div className="flex flex-wrap gap-2">
          {analysis.uniqueKeywords.map((keyword, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-md">
              {keyword}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-md font-medium mb-2">Action Items</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {analysis.actionItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function getComparisonClass(comparison) {
  if (comparison.includes('Better')) return 'bg-green-100 text-green-800';
  if (comparison.includes('Similar')) return 'bg-yellow-100 text-yellow-800';
  return 'bg-red-100 text-red-800';
}