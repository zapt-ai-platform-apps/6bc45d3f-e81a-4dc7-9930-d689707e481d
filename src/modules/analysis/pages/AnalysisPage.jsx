import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScoreCard from '../components/ScoreCard';
import RecommendationsList from '../components/RecommendationsList';
import IdeaSummary from '../components/IdeaSummary';
import IdeaValidationService from '@/modules/ideas/services/IdeaValidationService';
import { 
  ArrowLeftIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import * as Sentry from '@sentry/browser';

const AnalysisPage = () => {
  const { ideaId } = useParams();
  const navigate = useNavigate();
  const [ideaData, setIdeaData] = useState(null);
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Get idea details
        const idea = IdeaValidationService.getIdeaById(ideaId);
        if (!idea) {
          throw new Error('Ide bisnis tidak ditemukan');
        }
        setIdeaData(idea);
        
        // Get analysis
        const analysis = IdeaValidationService.getAnalysis(ideaId);
        if (!analysis) {
          // If no analysis exists, try to generate one
          const newAnalysis = await IdeaValidationService.generateAnalysis(idea);
          setAnalysisData(newAnalysis);
        } else {
          setAnalysisData(analysis);
        }
      } catch (error) {
        console.error('Error loading analysis:', error);
        Sentry.captureException(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [ideaId]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] p-4">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-gray-600">Memuat analisis...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto p-4 mt-8 text-center">
        <div className="bg-red-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Error</h2>
          <p className="text-red-600 mb-6">{error}</p>
          <Link to="/validate" className="btn btn-primary">
            Kembali ke Validator
          </Link>
        </div>
      </div>
    );
  }

  if (!ideaData || !analysisData) {
    return (
      <div className="max-w-6xl mx-auto p-4 mt-8 text-center">
        <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-yellow-700 mb-4">Data Tidak Ditemukan</h2>
          <p className="text-yellow-600 mb-6">Maaf, kami tidak dapat menemukan analisis atau data ide yang diminta.</p>
          <Link to="/validate" className="btn btn-primary">
            Kembali ke Validator
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <button 
        onClick={() => navigate('/dashboard')}
        className="flex items-center text-blue-600 hover:text-blue-800 mb-6 cursor-pointer"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-1" />
        Kembali ke Dashboard
      </button>
      
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Hasil Analisis Bisnis</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Berikut adalah analisis komprehensif dan rekomendasi untuk ide bisnis Anda.
        </p>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      >
        <ScoreCard 
          title="Skor Kelayakan" 
          score={analysisData.scores.overall} 
          mainScore={true} 
        />
        <ScoreCard 
          title="Potensi Pasar" 
          score={analysisData.scores.marketPotential} 
        />
        <ScoreCard 
          title="Keunggulan Kompetitif" 
          score={analysisData.scores.competitiveAdvantage} 
        />
        <ScoreCard 
          title="Kelayakan Finansial" 
          score={analysisData.scores.financialViability} 
          className="md:col-start-2" 
        />
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <DocumentTextIcon className="h-6 w-6 text-blue-600 mr-2" />
              Rekomendasi Strategis
            </h2>
            <RecommendationsList recommendations={analysisData.recommendations} />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <IdeaSummary ideaData={ideaData} />
        </motion.div>
      </div>
      
      <div className="mt-8 flex justify-center">
        <Link 
          to="/validate"
          className="btn btn-primary px-6 py-2 mr-4 cursor-pointer"
        >
          Validasi Ide Baru
        </Link>
        <Link 
          to="/tools"
          className="btn btn-secondary px-6 py-2 cursor-pointer"
        >
          Akses Perangkat Bisnis
        </Link>
      </div>
    </div>
  );
};

export default AnalysisPage;