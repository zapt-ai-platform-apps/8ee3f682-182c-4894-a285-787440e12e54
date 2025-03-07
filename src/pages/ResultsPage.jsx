import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SeoScoreCard from '@/components/results/SeoScoreCard';
import TitleOptimization from '@/components/results/TitleOptimization';
import KeywordAnalysis from '@/components/results/KeywordAnalysis';
import BulletPointsOptimization from '@/components/results/BulletPointsOptimization';
import DescriptionOptimization from '@/components/results/DescriptionOptimization';
import BackendTermsOptimization from '@/components/results/BackendTermsOptimization';
import CompetitorAnalysis from '@/components/results/CompetitorAnalysis';
import ActionableInsights from '@/components/results/ActionableInsights';

export default function ResultsPage() {
  const [results, setResults] = useState(null);
  const [originalData, setOriginalData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const storedResults = sessionStorage.getItem('seoAnalysisResults');
      const storedOriginalData = sessionStorage.getItem('originalData');
      
      if (!storedResults || !storedOriginalData) {
        navigate('/optimize');
        return;
      }
      
      setResults(JSON.parse(storedResults));
      setOriginalData(JSON.parse(storedOriginalData));
    } catch (error) {
      console.error('Error loading results:', error);
      navigate('/optimize');
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex justify-center items-center min-h-[50vh]">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Loading your SEO analysis results...</p>
        </div>
      </div>
    );
  }

  if (!results) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8 text-center">
        <h1 className="mb-4">Your Amazon SEO Analysis Results</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Review the optimization recommendations below to improve your product's visibility and sales performance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <SeoScoreCard score={results.seoScore} />
        
        <div className="lg:col-span-2 card p-6">
          <h2 className="mb-4">Summary</h2>
          <p className="text-gray-700 mb-4">{results.summary}</p>
          <div className="flex flex-wrap gap-2">
            {results.tags.map((tag, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <TitleOptimization 
          originalTitle={originalData.title}
          optimizedTitle={results.titleOptimization.optimizedTitle}
          recommendations={results.titleOptimization.recommendations}
        />

        <KeywordAnalysis 
          keywords={results.keywordAnalysis.keywords}
          missedOpportunities={results.keywordAnalysis.missedOpportunities}
          longTailKeywords={results.keywordAnalysis.longTailKeywords}
        />

        <BulletPointsOptimization 
          originalBulletPoints={originalData.bulletPoints}
          optimizedBulletPoints={results.bulletPointsOptimization.optimizedBulletPoints}
          recommendations={results.bulletPointsOptimization.recommendations}
        />

        <DescriptionOptimization 
          originalDescription={originalData.description}
          optimizedDescription={results.descriptionOptimization.optimizedDescription}
          recommendations={results.descriptionOptimization.recommendations}
        />

        {originalData.searchTerms && (
          <BackendTermsOptimization 
            originalTerms={originalData.searchTerms}
            optimizedTerms={results.backendTermsOptimization.optimizedTerms}
            recommendations={results.backendTermsOptimization.recommendations}
          />
        )}

        {originalData.competitorAsin && results.competitorAnalysis && (
          <CompetitorAnalysis 
            competitorAsin={originalData.competitorAsin}
            analysis={results.competitorAnalysis}
          />
        )}

        <ActionableInsights insights={results.actionableInsights} />

        <div className="flex justify-center pt-8">
          <button 
            onClick={() => navigate('/optimize')}
            className="btn-secondary cursor-pointer mr-4"
          >
            Optimize Another Listing
          </button>
          <button 
            onClick={() => window.print()}
            className="btn-primary cursor-pointer"
          >
            Print Results
          </button>
        </div>
      </div>
    </div>
  );
}