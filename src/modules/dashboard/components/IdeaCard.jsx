import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowTopRightOnSquareIcon, 
  DocumentChartBarIcon,
  LightBulbIcon,
  ExclamationCircleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const IdeaCard = ({ idea }) => {
  // Format date string to local date format
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return dateString;
    }
  };

  // Map industry value to readable text
  const getIndustryName = (industry) => {
    const industryMap = {
      'ecommerce': 'E-Commerce',
      'food': 'Makanan & Minuman',
      'technology': 'Teknologi',
      'education': 'Pendidikan',
      'health': 'Kesehatan & Kebugaran',
      'finance': 'Keuangan & Fintech',
      'travel': 'Travel & Pariwisata',
      'fashion': 'Fashion & Pakaian',
      'real_estate': 'Properti & Real Estate',
      'entertainment': 'Hiburan & Media',
      'manufacturing': 'Manufaktur',
      'transportation': 'Transportasi & Logistik',
      'agriculture': 'Pertanian',
      'other': 'Lainnya'
    };
    
    return industryMap[industry] || industry;
  };

  // Get score badge color
  const getScoreBadgeColor = (score) => {
    if (!score) return 'bg-gray-100 text-gray-600';
    if (score >= 80) return 'bg-green-100 text-green-800';
    if (score >= 60) return 'bg-blue-100 text-blue-800';
    if (score >= 40) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  // Get status text and color
  const getStatusInfo = (score) => {
    if (!score) {
      return {
        text: 'Perlu Analisis',
        icon: <ExclamationCircleIcon className="h-5 w-5 text-yellow-500" />,
        color: 'text-yellow-600'
      };
    }
    
    if (score >= 60) {
      return {
        text: 'Layak Dilanjutkan',
        icon: <CheckCircleIcon className="h-5 w-5 text-green-500" />,
        color: 'text-green-600'
      };
    }
    
    return {
      text: 'Perlu Perbaikan',
      icon: <ExclamationCircleIcon className="h-5 w-5 text-red-500" />,
      color: 'text-red-600'
    };
  };

  const { text: statusText, icon: statusIcon, color: statusColor } = getStatusInfo(
    idea.analysis?.scores?.overall
  );

  return (
    <div className="card hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start justify-between">
        <div className="flex items-center mb-3">
          <LightBulbIcon className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{idea.basicInfo.name}</h3>
        </div>
        {idea.analysis?.scores?.overall && (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreBadgeColor(idea.analysis.scores.overall)}`}>
            Skor: {idea.analysis.scores.overall}
          </span>
        )}
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="text-sm text-gray-500">
          <span className="font-medium">Industri:</span> {getIndustryName(idea.basicInfo.industry)}
        </div>
        <p className="text-gray-600 line-clamp-2">{idea.basicInfo.uniqueValueProposition}</p>
      </div>
      
      <div className="flex items-center text-sm mb-4">
        <div className="flex items-center mr-4">
          {statusIcon}
          <span className={`ml-1 ${statusColor}`}>{statusText}</span>
        </div>
        <span className="text-gray-500">{formatDate(idea.submittedAt)}</span>
      </div>
      
      <Link 
        to={`/analysis/${idea.id}`}
        className="btn btn-primary w-full flex items-center justify-center"
      >
        <DocumentChartBarIcon className="h-5 w-5 mr-1" />
        {idea.analysis ? 'Lihat Analisis' : 'Analisis Ide'}
        <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
      </Link>
    </div>
  );
};

export default IdeaCard;