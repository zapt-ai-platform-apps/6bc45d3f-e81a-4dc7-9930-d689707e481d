import React from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';

const ArticleCard = ({ article, featured = false }) => {
  return (
    <div className={`card hover:shadow-lg transition-shadow duration-300 ${featured ? 'border-l-4 border-blue-600' : ''}`}>
      <div className="flex items-start mb-3">
        <div className="p-2 bg-blue-50 rounded-lg mr-3">
          {article.icon}
        </div>
        <div>
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mb-2">
            {article.category}
          </span>
          <h3 className={`font-semibold text-gray-800 ${featured ? 'text-xl' : 'text-lg'}`}>
            {article.title}
          </h3>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {article.description}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-500 text-sm">
          <ClockIcon className="h-4 w-4 mr-1" />
          <span>{article.readTime}</span>
        </div>
        
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer">
          Baca Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;