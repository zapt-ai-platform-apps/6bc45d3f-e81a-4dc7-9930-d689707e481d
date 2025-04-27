import React from 'react';
import { ExclamationCircleIcon, InformationCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const RecommendationsList = ({ recommendations }) => {
  // Sort recommendations by severity (high to low)
  const sortedRecommendations = [...recommendations].sort((a, b) => {
    const severityOrder = { high: 0, medium: 1, low: 2 };
    return severityOrder[a.severity] - severityOrder[b.severity];
  });

  const getIcon = (severity) => {
    switch (severity) {
      case 'high':
        return <ExclamationCircleIcon className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />;
      case 'medium':
        return <InformationCircleIcon className="h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" />;
      case 'low':
        return <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />;
      default:
        return <InformationCircleIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />;
    }
  };

  const getBorderColor = (severity) => {
    switch (severity) {
      case 'high':
        return 'border-red-200';
      case 'medium':
        return 'border-yellow-200';
      case 'low':
        return 'border-green-200';
      default:
        return 'border-blue-200';
    }
  };

  return (
    <div className="space-y-4">
      {sortedRecommendations.map((recommendation, index) => (
        <div 
          key={index}
          className={`p-4 border rounded-lg ${getBorderColor(recommendation.severity)} animate-fade-in`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-start">
            {getIcon(recommendation.severity)}
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-1">{recommendation.title}</h4>
              <p className="text-gray-600">{recommendation.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;