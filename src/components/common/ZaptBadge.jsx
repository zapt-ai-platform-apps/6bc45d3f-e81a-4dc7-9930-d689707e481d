import React from 'react';

const ZaptBadge = () => {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <a 
        href="https://www.zapt.ai" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-xs font-medium text-gray-600 hover:text-blue-600 transition-colors"
      >
        Made on ZAPT
      </a>
    </div>
  );
};

export default ZaptBadge;