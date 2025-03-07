import React from 'react';

export default function KeywordAnalysis({ keywords, missedOpportunities, longTailKeywords }) {
  return (
    <div className="card p-6">
      <h2 className="mb-4">Keyword Analysis</h2>
      
      <div className="mb-6">
        <h3 className="text-md font-medium mb-3">Top Ranking Keywords</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Keyword
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Search Volume
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Relevance
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Usage
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {keywords.map((keyword, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {keyword.term}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {keyword.searchVolume}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <span className={`inline-block w-16 h-2 rounded-full ${getRelevanceColor(keyword.relevance)}`}></span>
                      <span className="ml-2">{keyword.relevance}/10</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {renderUsage(keyword.usage)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-md font-medium mb-3">Missed Opportunities</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {missedOpportunities.map((keyword, index) => (
              <li key={index}>
                <span className="font-medium">{keyword.term}</span> - {keyword.searchVolume} monthly searches
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-md font-medium mb-3">Recommended Long-Tail Keywords</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {longTailKeywords.map((keyword, index) => (
              <li key={index}>
                <span className="font-medium">{keyword.term}</span> - {keyword.searchVolume} monthly searches
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Helper functions
function getRelevanceColor(relevance) {
  if (relevance >= 8) return 'bg-green-500';
  if (relevance >= 5) return 'bg-yellow-500';
  return 'bg-red-500';
}

function renderUsage(usage) {
  switch(usage) {
    case 'title':
      return <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Title</span>;
    case 'bullets':
      return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Bullets</span>;
    case 'description':
      return <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">Description</span>;
    case 'backend':
      return <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">Backend</span>;
    case 'missing':
      return <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Missing</span>;
    default:
      if (Array.isArray(usage)) {
        return (
          <div className="flex flex-wrap gap-1">
            {usage.map((u, i) => (
              <span key={i} className={`px-2 py-1 text-xs rounded-full 
                ${u === 'title' ? 'bg-blue-100 text-blue-800' : 
                u === 'bullets' ? 'bg-green-100 text-green-800' : 
                u === 'description' ? 'bg-purple-100 text-purple-800' : 
                u === 'backend' ? 'bg-gray-100 text-gray-800' : ''}`}>
                {u.charAt(0).toUpperCase() + u.slice(1)}
              </span>
            ))}
          </div>
        );
      }
      return <span>Unknown</span>;
  }
}