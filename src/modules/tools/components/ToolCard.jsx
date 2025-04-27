import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const ToolCard = ({ tool }) => {
  return (
    <div className="card hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="flex items-start mb-3">
        <div className="p-2 bg-blue-50 rounded-lg mr-3">
          {tool.icon}
        </div>
        <div>
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mb-2">
            {tool.category}
          </span>
          <h3 className="font-semibold text-gray-800 text-lg">
            {tool.title}
          </h3>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 flex-grow">
        {tool.description}
      </p>
      
      <button className="btn btn-primary flex items-center justify-center cursor-pointer">
        <ArrowDownTrayIcon className="h-5 w-5 mr-1" />
        Unduh Template
      </button>
    </div>
  );
};

export default ToolCard;