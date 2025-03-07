import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { generateSeoAnalysis } from '@/services/seoAnalysisService';

export default function OptimizationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      console.log('Submitting form data:', data);
      const analysisResults = await generateSeoAnalysis(data);
      console.log('Analysis results:', analysisResults);
      
      // Store results in session storage to access on results page
      sessionStorage.setItem('seoAnalysisResults', JSON.stringify(analysisResults));
      sessionStorage.setItem('originalData', JSON.stringify(data));
      
      navigate('/results');
    } catch (error) {
      console.error('Error generating SEO analysis:', error);
      alert('An error occurred while generating your SEO analysis. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8 text-center">
        <h1 className="mb-4">Optimize Your Amazon Product Listing</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Enter your product details below for an in-depth SEO analysis and optimization recommendations.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 card p-6">
        {/* Product Title */}
        <div>
          <label htmlFor="title" className="label">
            Product Title <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            type="text"
            className={`input-field ${errors.title ? 'border-red-500' : ''}`}
            placeholder="Enter your current product title"
            {...register('title', { 
              required: "Product title is required",
              maxLength: { 
                value: 200, 
                message: "Amazon titles should be less than 200 characters" 
              }
            })}
          />
          {errors.title && <p className="error-text">{errors.title.message}</p>}
          <p className="text-xs text-gray-500 mt-1">Max 200 characters. Include important keywords.</p>
        </div>

        {/* Product Category */}
        <div>
          <label htmlFor="category" className="label">
            Product Category <span className="text-red-500">*</span>
          </label>
          <input
            id="category"
            type="text"
            className={`input-field ${errors.category ? 'border-red-500' : ''}`}
            placeholder="e.g. Kitchen, Electronics, Beauty, etc."
            {...register('category', { 
              required: "Product category is required" 
            })}
          />
          {errors.category && <p className="error-text">{errors.category.message}</p>}
        </div>

        {/* Bullet Points */}
        <div>
          <label htmlFor="bulletPoints" className="label">
            Bullet Points (Key Features) <span className="text-red-500">*</span>
          </label>
          <textarea
            id="bulletPoints"
            rows="5"
            className={`input-field ${errors.bulletPoints ? 'border-red-500' : ''}`}
            placeholder="Enter your current bullet points (one per line)"
            {...register('bulletPoints', { 
              required: "Bullet points are required" 
            })}
          ></textarea>
          {errors.bulletPoints && <p className="error-text">{errors.bulletPoints.message}</p>}
          <p className="text-xs text-gray-500 mt-1">Enter one bullet point per line. These are your product features.</p>
        </div>

        {/* Product Description */}
        <div>
          <label htmlFor="description" className="label">
            Product Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            rows="6"
            className={`input-field ${errors.description ? 'border-red-500' : ''}`}
            placeholder="Enter your current product description"
            {...register('description', { 
              required: "Product description is required" 
            })}
          ></textarea>
          {errors.description && <p className="error-text">{errors.description.message}</p>}
        </div>

        {/* Backend Search Terms */}
        <div>
          <label htmlFor="searchTerms" className="label">
            Backend Search Terms (optional)
          </label>
          <textarea
            id="searchTerms"
            rows="3"
            className="input-field"
            placeholder="Enter your current backend search terms"
            {...register('searchTerms')}
          ></textarea>
          <p className="text-xs text-gray-500 mt-1">These are the hidden keywords in your seller account that help with search visibility.</p>
        </div>

        {/* Competitor ASIN */}
        <div>
          <label htmlFor="competitorAsin" className="label">
            Competitor ASIN (optional)
          </label>
          <input
            id="competitorAsin"
            type="text"
            className="input-field"
            placeholder="e.g. B08N5KWB9H"
            {...register('competitorAsin')}
          />
          <p className="text-xs text-gray-500 mt-1">Enter a competitor's ASIN to compare your listing against theirs.</p>
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="btn-primary px-8 py-3 text-lg cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing...
              </div>
            ) : (
              'Generate SEO Analysis'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}