import React, { useState } from 'react';

const MarketAnalysisForm = ({ initialData = {}, onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    marketSize: initialData.marketSize || '',
    marketGrowth: initialData.marketGrowth || '',
    targetMarketSegments: initialData.targetMarketSegments || '',
    customerNeeds: initialData.customerNeeds || '',
    customerPainPoints: initialData.customerPainPoints || '',
    marketEntryStrategy: initialData.marketEntryStrategy || '',
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
    
    if (!formData.marketSize.trim()) {
      newErrors.marketSize = 'Ukuran pasar diperlukan';
    }
    
    if (!formData.marketGrowth.trim()) {
      newErrors.marketGrowth = 'Pertumbuhan pasar diperlukan';
    }
    
    if (!formData.targetMarketSegments.trim()) {
      newErrors.targetMarketSegments = 'Segmen pasar target diperlukan';
    }
    
    if (!formData.customerNeeds.trim()) {
      newErrors.customerNeeds = 'Kebutuhan pelanggan diperlukan';
    }
    
    if (!formData.customerPainPoints.trim()) {
      newErrors.customerPainPoints = 'Pain points pelanggan diperlukan';
    }
    
    if (!formData.marketEntryStrategy.trim()) {
      newErrors.marketEntryStrategy = 'Strategi masuk pasar diperlukan';
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
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Analisis Pasar</h2>
        
        <div>
          <label htmlFor="marketSize" className="block text-sm font-medium text-gray-700 mb-1">
            Ukuran Pasar Potensial *
          </label>
          <select
            id="marketSize"
            name="marketSize"
            value={formData.marketSize}
            onChange={handleChange}
            className={`input ${errors.marketSize ? 'border-red-500' : ''}`}
          >
            <option value="">Pilih Ukuran Pasar</option>
            <option value="small">Kecil (Di bawah Rp 1 Miliar)</option>
            <option value="medium">Menengah (Rp 1 Miliar - Rp 10 Miliar)</option>
            <option value="large">Besar (Rp 10 Miliar - Rp 100 Miliar)</option>
            <option value="very_large">Sangat Besar (Di atas Rp 100 Miliar)</option>
          </select>
          {errors.marketSize && <p className="mt-1 text-sm text-red-600">{errors.marketSize}</p>}
        </div>
        
        <div>
          <label htmlFor="marketGrowth" className="block text-sm font-medium text-gray-700 mb-1">
            Pertumbuhan Pasar Tahunan (%) *
          </label>
          <select
            id="marketGrowth"
            name="marketGrowth"
            value={formData.marketGrowth}
            onChange={handleChange}
            className={`input ${errors.marketGrowth ? 'border-red-500' : ''}`}
          >
            <option value="">Pilih Pertumbuhan Pasar</option>
            <option value="declining">Menurun (Negatif)</option>
            <option value="stable">Stabil (0-5%)</option>
            <option value="growing">Bertumbuh (5-15%)</option>
            <option value="fast_growing">Pertumbuhan Cepat (15-30%)</option>
            <option value="explosive">Pertumbuhan Eksplosif (&gt;30%)</option>
          </select>
          {errors.marketGrowth && <p className="mt-1 text-sm text-red-600">{errors.marketGrowth}</p>}
        </div>
        
        <div>
          <label htmlFor="targetMarketSegments" className="block text-sm font-medium text-gray-700 mb-1">
            Segmen Pasar Target *
          </label>
          <textarea
            id="targetMarketSegments"
            name="targetMarketSegments"
            value={formData.targetMarketSegments}
            onChange={handleChange}
            rows="3"
            className={`input ${errors.targetMarketSegments ? 'border-red-500' : ''}`}
            placeholder="Jelaskan segmen pasar spesifik yang Anda targetkan (demografi, geografi, perilaku, dll)"
          ></textarea>
          {errors.targetMarketSegments && <p className="mt-1 text-sm text-red-600">{errors.targetMarketSegments}</p>}
        </div>
        
        <div>
          <label htmlFor="customerNeeds" className="block text-sm font-medium text-gray-700 mb-1">
            Kebutuhan Pelanggan *
          </label>
          <textarea
            id="customerNeeds"
            name="customerNeeds"
            value={formData.customerNeeds}
            onChange={handleChange}
            rows="3"
            className={`input ${errors.customerNeeds ? 'border-red-500' : ''}`}
            placeholder="Kebutuhan utama pelanggan yang akan dipenuhi oleh bisnis Anda"
          ></textarea>
          {errors.customerNeeds && <p className="mt-1 text-sm text-red-600">{errors.customerNeeds}</p>}
        </div>
        
        <div>
          <label htmlFor="customerPainPoints" className="block text-sm font-medium text-gray-700 mb-1">
            Pain Points Pelanggan *
          </label>
          <textarea
            id="customerPainPoints"
            name="customerPainPoints"
            value={formData.customerPainPoints}
            onChange={handleChange}
            rows="3"
            className={`input ${errors.customerPainPoints ? 'border-red-500' : ''}`}
            placeholder="Masalah atau kesulitan yang dihadapi pelanggan yang akan diatasi oleh solusi Anda"
          ></textarea>
          {errors.customerPainPoints && <p className="mt-1 text-sm text-red-600">{errors.customerPainPoints}</p>}
        </div>
        
        <div>
          <label htmlFor="marketEntryStrategy" className="block text-sm font-medium text-gray-700 mb-1">
            Strategi Masuk Pasar *
          </label>
          <textarea
            id="marketEntryStrategy"
            name="marketEntryStrategy"
            value={formData.marketEntryStrategy}
            onChange={handleChange}
            rows="3"
            className={`input ${errors.marketEntryStrategy ? 'border-red-500' : ''}`}
            placeholder="Bagaimana Anda berencana memasuki pasar? (strategi akuisisi pelanggan, positioning, dll)"
          ></textarea>
          {errors.marketEntryStrategy && <p className="mt-1 text-sm text-red-600">{errors.marketEntryStrategy}</p>}
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

export default MarketAnalysisForm;