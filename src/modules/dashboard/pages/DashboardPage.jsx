import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IdeaCard from '../components/IdeaCard';
import EmptyState from '../components/EmptyState';
import { PlusIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const DashboardPage = () => {
  const [ideas, setIdeas] = useState([]);
  const [analyses, setAnalyses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load saved ideas and analyses from localStorage
    const loadData = () => {
      try {
        const savedIdeas = JSON.parse(localStorage.getItem('businessIdeas') || '[]');
        const savedAnalyses = JSON.parse(localStorage.getItem('businessIdeasAnalyses') || '[]');
        
        setIdeas(savedIdeas);
        setAnalyses(savedAnalyses);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  // Combine idea data with its analysis for display
  const ideasWithAnalysis = ideas.map(idea => {
    const analysis = analyses.find(a => a.ideaId === idea.id) || null;
    return {
      ...idea,
      analysis
    };
  });
  
  // Sort by submission date (newest first)
  const sortedIdeas = [...ideasWithAnalysis].sort((a, b) => {
    return new Date(b.submittedAt) - new Date(a.submittedAt);
  });

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] p-4">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Memuat data...</p>
      </div>
    );
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Ide Bisnis</h1>
          <p className="mt-2 text-lg text-gray-600">
            Pantau dan kelola semua ide bisnis yang telah Anda validasi
          </p>
        </div>
        <Link
          to="/validate"
          className="btn btn-primary flex items-center"
        >
          <PlusIcon className="h-5 w-5 mr-1" />
          Ide Baru
        </Link>
      </div>
      
      {sortedIdeas.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedIdeas.map((idea, index) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <IdeaCard idea={idea} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;