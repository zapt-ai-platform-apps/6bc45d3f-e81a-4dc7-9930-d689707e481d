import React from 'react';

const IdeaSummary = ({ ideaData }) => {
  // Map industry value to readable text
  const getIndustryName = (industry) => {
    const industryMap = {
      'ecommerce': 'E-Commerce',
      'food': 'Makanan & Minuman',
      'technology': 'Teknologi',
      'education': 'Pendidikan',
      'health': 'Kesehatan & Kebugaran',
      'finance': 'Keuangan & Fintech',
      'travel': 'Travel & Pariwisata',
      'fashion': 'Fashion & Pakaian',
      'real_estate': 'Properti & Real Estate',
      'entertainment': 'Hiburan & Media',
      'manufacturing': 'Manufaktur',
      'transportation': 'Transportasi & Logistik',
      'agriculture': 'Pertanian',
      'other': 'Lainnya'
    };
    
    return industryMap[industry] || industry;
  };

  // Format date string to local date format
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return dateString;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Ringkasan Ide Bisnis</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Nama Ide</h3>
          <p className="text-base text-gray-800">{ideaData.basicInfo.name}</p>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-500">Industri</h3>
          <p className="text-base text-gray-800">{getIndustryName(ideaData.basicInfo.industry)}</p>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-500">Proposisi Nilai Unik</h3>
          <p className="text-base text-gray-800">{ideaData.basicInfo.uniqueValueProposition}</p>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-500">Target Audiens</h3>
          <p className="text-base text-gray-800">{ideaData.basicInfo.targetAudience}</p>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-500">Model Pendapatan</h3>
          <p className="text-base text-gray-800">{ideaData.financialAnalysis.revenueModel}</p>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-500">Tanggal Validasi</h3>
          <p className="text-base text-gray-800">{formatDate(ideaData.submittedAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default IdeaSummary;