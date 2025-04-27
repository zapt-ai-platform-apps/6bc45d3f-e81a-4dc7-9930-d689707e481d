import React from 'react';
import { motion } from 'framer-motion';

const ScoreCard = ({ title, score, mainScore = false, className = '' }) => {
  // Get color based on score
  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };
  
  // Get background color based on score
  const getScoreBgColor = (score) => {
    if (score >= 80) return 'bg-green-50';
    if (score >= 60) return 'bg-blue-50';
    if (score >= 40) return 'bg-yellow-50';
    return 'bg-red-50';
  };
  
  // Get rating text based on score
  const getScoreRating = (score) => {
    if (score >= 80) return 'Sangat Baik';
    if (score >= 60) return 'Baik';
    if (score >= 40) return 'Cukup';
    if (score >= 20) return 'Kurang';
    return 'Sangat Kurang';
  };

  return (
    <div className={`card ${getScoreBgColor(score)} ${className}`}>
      <h3 className="text-lg font-medium text-gray-700 mb-2">{title}</h3>
      <div className="flex items-center justify-between">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className={`text-4xl ${mainScore ? 'text-5xl' : ''} font-bold ${getScoreColor(score)}`}
        >
          {score}
        </motion.div>
        <div className="text-right">
          <div className={`inline-block px-2 py-1 rounded-full ${getScoreColor(score)} bg-white text-sm font-medium`}>
            {getScoreRating(score)}
          </div>
          <div className="mt-2 relative h-2 w-full bg-gray-200 rounded-full overflow-hidden max-w-[120px]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${score}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`absolute top-0 left-0 h-full ${score >= 80 ? 'bg-green-600' : score >= 60 ? 'bg-blue-600' : score >= 40 ? 'bg-yellow-500' : 'bg-red-600'}`}
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;