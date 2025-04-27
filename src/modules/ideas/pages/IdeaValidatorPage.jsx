import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import IdeaForm from '../components/IdeaForm';
import StepsIndicator from '../components/StepsIndicator';
import MarketAnalysisForm from '../components/MarketAnalysisForm';
import CompetitorAnalysisForm from '../components/CompetitorAnalysisForm';
import FinancialAnalysisForm from '../components/FinancialAnalysisForm';
import IdeaValidationService from '../services/IdeaValidationService';

const IdeaValidatorPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    id: uuidv4(),
    basicInfo: {},
    marketAnalysis: {},
    competitorAnalysis: {},
    financialAnalysis: {}
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { id: 1, name: 'Informasi Dasar', description: 'Detail ide bisnis Anda' },
    { id: 2, name: 'Analisis Pasar', description: 'Target pasar dan kebutuhan' },
    { id: 3, name: 'Analisis Kompetitor', description: 'Pesaing dan pembeda' },
    { id: 4, name: 'Analisis Finansial', description: 'Proyeksi keuangan' }
  ];

  const handleBasicInfoSubmit = (data) => {
    setFormData(prev => ({ ...prev, basicInfo: data }));
    setCurrentStep(2);
    window.scrollTo(0, 0);
  };

  const handleMarketAnalysisSubmit = (data) => {
    setFormData(prev => ({ ...prev, marketAnalysis: data }));
    setCurrentStep(3);
    window.scrollTo(0, 0);
  };

  const handleCompetitorAnalysisSubmit = (data) => {
    setFormData(prev => ({ ...prev, competitorAnalysis: data }));
    setCurrentStep(4);
    window.scrollTo(0, 0);
  };

  const handleFinancialAnalysisSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const completeFormData = {
        ...formData,
        financialAnalysis: data,
        submittedAt: new Date().toISOString()
      };
      
      // Store in localStorage
      const savedIdeas = JSON.parse(localStorage.getItem('businessIdeas') || '[]');
      savedIdeas.push(completeFormData);
      localStorage.setItem('businessIdeas', JSON.stringify(savedIdeas));
      
      // Generate analysis
      await IdeaValidationService.generateAnalysis(completeFormData);
      
      // Navigate to analysis page
      navigate(`/analysis/${completeFormData.id}`);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Validator Ide Bisnis</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Masukkan detail ide bisnis Anda untuk mendapatkan analisis mendalam dan skor kelayakan.
        </p>
      </div>

      <div className="mb-8">
        <StepsIndicator steps={steps} currentStep={currentStep} />
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 animate-fade-in">
        {currentStep === 1 && (
          <IdeaForm 
            initialData={formData.basicInfo} 
            onSubmit={handleBasicInfoSubmit} 
          />
        )}
        
        {currentStep === 2 && (
          <MarketAnalysisForm 
            initialData={formData.marketAnalysis}
            onSubmit={handleMarketAnalysisSubmit}
            onBack={goToPreviousStep}
          />
        )}
        
        {currentStep === 3 && (
          <CompetitorAnalysisForm 
            initialData={formData.competitorAnalysis}
            onSubmit={handleCompetitorAnalysisSubmit}
            onBack={goToPreviousStep}
          />
        )}
        
        {currentStep === 4 && (
          <FinancialAnalysisForm 
            initialData={formData.financialAnalysis}
            onSubmit={handleFinancialAnalysisSubmit}
            onBack={goToPreviousStep}
            isSubmitting={isSubmitting}
          />
        )}
      </div>
    </div>
  );
};

export default IdeaValidatorPage;