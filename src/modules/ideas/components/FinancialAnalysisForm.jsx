import React, { useState } from 'react';

const FinancialAnalysisForm = ({ initialData = {}, onSubmit, onBack, isSubmitting }) => {
  const [formData, setFormData] = useState({
    startupCost: initialData.startupCost || '',
    revenueModel: initialData.revenueModel || '',
    estimatedProfit: initialData.estimatedProfit || '',
    breakEvenTime: initialData.breakEvenTime || '',
    fundingNeeded: initialData.fundingNeeded || '',
    riskLevel: initialData.riskLevel || '',
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
    
    if (!formData.startupCost.trim()) {
      newErrors.startupCost = 'Biaya awal diperlukan';
    }
    
    if (!formData.revenueModel.trim()) {
      newErrors.revenueModel = 'Model pendapatan diperlukan';
    }
    
    if (!formData.estimatedProfit.trim()) {
      newErrors.estimatedProfit = 'Estimasi profit diperlukan';
    }
    
    if (!formData.breakEvenTime.trim()) {
      newErrors.breakEvenTime = 'Waktu BEP diperlukan';
    }
    
    if (!formData.fundingNeeded.trim()) {
      newErrors.fundingNeeded = 'Kebutuhan pendanaan diperlukan';
    }
    
    if (!formData.riskLevel.trim()) {
      newErrors.riskLevel = 'Tingkat risiko diperlukan';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm() && !isSubmitting) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Analisis Finansial</h2>
        
        <div>
          <label htmlFor="startupCost" className="block text-sm font-medium text-gray-700 mb-1">
            Estimasi Biaya Awal *
          </label>
          <select
            id="startupCost"
            name="startupCost"
            value={formData.startupCost}
            onChange={handleChange}
            className={`input ${errors.startupCost ? 'border-red-500' : ''}`}
            disabled={isSubmitting}
          >
            <option value="">Pilih Estimasi Biaya</option>
            <option value="very_low">Sangat Rendah (< Rp 10 Juta)</option>
            <option value="low">Rendah (Rp 10 - 50 Juta)</option>
            <option value="medium">Sedang (Rp 50 - 200 Juta)</option>
            <option value="high">Tinggi (Rp 200 Juta - 1 Miliar)</option>
            <option value="very_high">Sangat Tinggi (> Rp 1 Miliar)</option>
          </select>
          {errors.startupCost && <p className="mt-1 text-sm text-red-600">{errors.startupCost}</p>}
        </div>
        
        <div>
          <label htmlFor="revenueModel" className="block text-sm font-medium text-gray-700 mb-1">
            Model Pendapatan *
          </label>
          <textarea
            id="revenueModel"
            name="revenueModel"
            value={formData.revenueModel}
            onChange={handleChange}
            rows="3"
            className={`input ${errors.revenueModel ? 'border-red-500' : ''}`}
            placeholder="Jelaskan bagaimana bisnis Anda akan menghasilkan pendapatan"
            disabled={isSubmitting}
          ></textarea>
          {errors.revenueModel && <p className="mt-1 text-sm text-red-600">{errors.revenueModel}</p>}
        </div>
        
        <div>
          <label htmlFor="estimatedProfit" className="block text-sm font-medium text-gray-700 mb-1">
            Estimasi Profit Margin *
          </label>
          <select
            id="estimatedProfit"
            name="estimatedProfit"
            value={formData.estimatedProfit}
            onChange={handleChange}
            className={`input ${errors.estimatedProfit ? 'border-red-500' : ''}`}
            disabled={isSubmitting}
          >
            <option value="">Pilih Estimasi Profit</option>
            <option value="very_low">Sangat Rendah (< 5%)</option>
            <option value="low">Rendah (5-15%)</option>
            <option value="medium">Sedang (15-30%)</option>
            <option value="high">Tinggi (30-50%)</option>
            <option value="very_high">Sangat Tinggi (> 50%)</option>
          </select>
          {errors.estimatedProfit && <p className="mt-1 text-sm text-red-600">{errors.estimatedProfit}</p>}
        </div>
        
        <div>
          <label htmlFor="breakEvenTime" className="block text-sm font-medium text-gray-700 mb-1">
            Estimasi Waktu BEP (Break Even Point) *
          </label>
          <select
            id="breakEvenTime"
            name="breakEvenTime"
            value={formData.breakEvenTime}
            onChange={handleChange}
            className={`input ${errors.breakEvenTime ? 'border-red-500' : ''}`}
            disabled={isSubmitting}
          >
            <option value="">Pilih Estimasi Waktu</option>
            <option value="very_fast">Sangat Cepat (< 6 bulan)</option>
            <option value="fast">Cepat (6-12 bulan)</option>
            <option value="medium">Sedang (1-2 tahun)</option>
            <option value="slow">Lama (2-3 tahun)</option>
            <option value="very_slow">Sangat Lama (> 3 tahun)</option>
          </select>
          {errors.breakEvenTime && <p className="mt-1 text-sm text-red-600">{errors.breakEvenTime}</p>}
        </div>
        
        <div>
          <label htmlFor="fundingNeeded" className="block text-sm font-medium text-gray-700 mb-1">
            Kebutuhan Pendanaan *
          </label>
          <select
            id="fundingNeeded"
            name="fundingNeeded"
            value={formData.fundingNeeded}
            onChange={handleChange}
            className={`input ${errors.fundingNeeded ? 'border-red-500' : ''}`}
            disabled={isSubmitting}
          >
            <option value="">Pilih Kebutuhan Pendanaan</option>
            <option value="bootstrapped">Bootstrap (Dana Pribadi)</option>
            <option value="small_investment">Investasi Kecil (< Rp 100 Juta)</option>
            <option value="medium_investment">Investasi Sedang (Rp 100 - 500 Juta)</option>
            <option value="large_investment">Investasi Besar (Rp 500 Juta - 2 Miliar)</option>
            <option value="very_large_investment">Investasi Sangat Besar (> Rp 2 Miliar)</option>
          </select>
          {errors.fundingNeeded && <p className="mt-1 text-sm text-red-600">{errors.fundingNeeded}</p>}
        </div>
        
        <div>
          <label htmlFor="riskLevel" className="block text-sm font-medium text-gray-700 mb-1">
            Tingkat Risiko Finansial *
          </label>
          <select
            id="riskLevel"
            name="riskLevel"
            value={formData.riskLevel}
            onChange={handleChange}
            className={`input ${errors.riskLevel ? 'border-red-500' : ''}`}
            disabled={isSubmitting}
          >
            <option value="">Pilih Tingkat Risiko</option>
            <option value="very_low">Sangat Rendah</option>
            <option value="low">Rendah</option>
            <option value="medium">Sedang</option>
            <option value="high">Tinggi</option>
            <option value="very_high">Sangat Tinggi</option>
          </select>
          {errors.riskLevel && <p className="mt-1 text-sm text-red-600">{errors.riskLevel}</p>}
        </div>
        
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="btn btn-secondary px-6 py-2 cursor-pointer"
            disabled={isSubmitting}
          >
            Kembali
          </button>
          <button
            type="submit"
            className={`btn btn-primary px-6 py-2 cursor-pointer flex items-center justify-center ${isSubmitting ? 'opacity-75' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Memproses...
              </>
            ) : 'Selesaikan dan Analisis'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default FinancialAnalysisForm;