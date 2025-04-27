import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="card hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="flex flex-col h-full">
        <div className="mb-4 p-3 rounded-full bg-blue-50 inline-block">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;