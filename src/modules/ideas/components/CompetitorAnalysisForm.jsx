import React, { useState } from 'react';

const CompetitorAnalysisForm = ({ initialData = {}, onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    mainCompetitors: initialData.mainCompetitors || '',
    competitiveAdvantage: initialData.competitiveAdvantage || '',
    marketBarriers: initialData.marketBarriers || '',
    competitorStrengths: initialData.competitorStrengths || '',
    competitorWeaknesses: initialData.competitorWeaknesses || '',
    differentiationStrategy: initialData.differentiationStrategy || '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.mainCompetitors.trim()) {
      newErrors.mainCompetitors = 'Kompetitor utama diperlukan';
    }
    
    if (!formData.competitiveAdvantage.trim()) {
      newErrors.competitiveAdvantage = 'Keunggulan kompetitif diperlukan';
    }
    
    if (!formData.marketBarriers.trim()) {
      newErrors.marketBarriers = 'Hambatan masuk pasar diperlukan';
    }
    
    if (!formData.competitorStrengths.trim()) {
      newErrors.competitorStrengths = 'Kekuatan kompetitor diperlukan';
    }
    
    if (!formData.competitorWeaknesses.trim()) {
      newErrors.competitorWeaknesses = 'Kelemahan kompetitor diperlukan';
    }
    
    if (!formData.differentiationStrategy.trim()) {
      newErrors.differentiationStrategy = 'Strategi diferensiasi diperlukan';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Analisis Kompetitor</h2>
        
        <div>
          <label htmlFor="mainCompetitors" className="block text-sm font-medium text-gray-700 mb-1">
            Kompetitor Utama *
          </label>
          <textarea
            id="mainCompetitors"
            name="mainCompetitors"
            value={formData.mainCompetitors}
            onChange={handleChange}
            rows="3"
            className={`input ${errors.mainCompetitors ? 'border-red-500' : ''}`}
            placeholder="Sebutkan dan jelaskan kompetitor utama Anda (langsung dan tidak langsung)"
          ></textarea>
          {errors.mainCompetitors && <p className="mt-1 text-sm text-red-600">{errors.mainCompetitors}</p>}
        </div>
        
        <div>
          <label htmlFor="competitiveAdvantage" className="block text-sm font-medium text-gray-700 mb-1">
            Keunggulan Kompetitif *
          </label>
          <textarea
            id="competitiveAdvantage"
            name="competitiveAdvantage"
            value={formData.competitiveAdvantage}
            onChange={handleChange}
            rows="3"
            className={`input ${errors.competitiveAdvantage ? 'border-red-500' : ''}`}
            placeholder="Apa keunggulan kompetitif bisnis Anda dibandingkan dengan pesaing?"
          ></textarea>
          {errors.competitiveAdvantage && <p className="mt-1 text-sm text-red-600">{errors.competitiveAdvantage}</p>}
        </div>
        
        <div>
          <label htmlFor="marketBarriers" className="block text-sm font-medium text-gray-700 mb-1">
            Hambatan Masuk Pasar *
          </label>
          <select
            id="marketBarriers"
            name="marketBarriers"
            value={formData.marketBarriers}
            onChange={handleChange}
            className={`input ${errors.marketBarriers ? 'border-red-500' : ''}`}
          >
            <option value="">Pilih Tingkat Hambatan</option>
            <option value="very_low">Sangat Rendah</option>
            <option value="low">Rendah</option>
            <option value="medium">Sedang</option>
            <option value="high">Tinggi</option>
            <option value="very_high">Sangat Tinggi</option>
          </select>
          {errors.marketBarriers && <p className="mt-1 text-sm text-red-600">{errors.marketBarriers}</p>}
        </div>
        
        <div>
          <label htmlFor="competitorStrengths" className="block text-sm font-medium text-gray-700 mb-1">
            Kekuatan Kompetitor *
          </label>
          <textarea
            id="competitorStrengths"
            name="competitorStrengths"
            value={formData.competitorStrengths}
            onChange={handleChange}
            rows="3"
            className={`input ${errors.competitorStrengths ? 'border-red-500' : ''}`}
            placeholder="Apa saja kekuatan utama dari kompetitor Anda?"
          ></textarea>
          {errors.competitorStrengths && <p className="mt-1 text-sm text-red-600">{errors.competitorStrengths}</p>}
        </div>
        
        <div>
          <label htmlFor="competitorWeaknesses" className="block text-sm font-medium text-gray-700 mb-1">
            Kelemahan Kompetitor *
          </label>
          <textarea
            id="competitorWeaknesses"
            name="competitorWeaknesses"
            value={formData.competitorWeaknesses}
            onChange={handleChange}
            rows="3"
            className={`input ${errors.competitorWeaknesses ? 'border-red-500' : ''}`}
            placeholder="Apa saja kelemahan utama dari kompetitor Anda?"
          ></textarea>
          {errors.competitorWeaknesses && <p className="mt-1 text-sm text-red-600">{errors.competitorWeaknesses}</p>}
        </div>
        
        <div>
          <label htmlFor="differentiationStrategy" className="block text-sm font-medium text-gray-700 mb-1">
            Strategi Diferensiasi *
          </label>
          <textarea
            id="differentiationStrategy"
            name="differentiationStrategy"
            value={formData.differentiationStrategy}
            onChange={handleChange}
            rows="3"
            className={`input ${errors.differentiationStrategy ? 'border-red-500' : ''}`}
            placeholder="Bagaimana Anda akan membedakan diri dari kompetitor?"
          ></textarea>
          {errors.differentiationStrategy && <p className="mt-1 text-sm text-red-600">{errors.differentiationStrategy}</p>}
        </div>
        
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="btn btn-secondary px-6 py-2 cursor-pointer"
          >
            Kembali
          </button>
          <button
            type="submit"
            className="btn btn-primary px-6 py-2 cursor-pointer"
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </form>
  );
};

export default CompetitorAnalysisForm;