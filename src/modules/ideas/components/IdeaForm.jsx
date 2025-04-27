import React, { useState } from 'react';

const IdeaForm = ({ initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    industry: initialData.industry || '',
    description: initialData.description || '',
    problemSolving: initialData.problemSolving || '',
    targetAudience: initialData.targetAudience || '',
    uniqueValueProposition: initialData.uniqueValueProposition || '',
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
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nama ide bisnis diperlukan';
    }
    
    if (!formData.industry.trim()) {
      newErrors.industry = 'Industri diperlukan';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Deskripsi diperlukan';
    } else if (formData.description.trim().length < 50) {
      newErrors.description = 'Deskripsi harus minimal 50 karakter';
    }
    
    if (!formData.problemSolving.trim()) {
      newErrors.problemSolving = 'Masalah yang dipecahkan diperlukan';
    }
    
    if (!formData.targetAudience.trim()) {
      newErrors.targetAudience = 'Target audiens diperlukan';
    }
    
    if (!formData.uniqueValueProposition.trim()) {
      newErrors.uniqueValueProposition = 'Proposisi nilai unik diperlukan';
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
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Informasi Dasar Ide Bisnis</h2>
        
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nama Ide Bisnis *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`input ${errors.name ? 'border-red-500' : ''}`}
            placeholder="Contoh: EcoMerchant - Platform Produk Ramah Lingkungan"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
            Industri/Kategori *
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className={`input ${errors.industry ? 'border-red-500' : ''}`}
          >
            <option value="">Pilih Industri</option>
            <option value="ecommerce">E-Commerce</option>
            <option value="food">Makanan & Minuman</option>
            <option value="technology">Teknologi</option>
            <option value="education">Pendidikan</option>
            <option value="health">Kesehatan & Kebugaran</option>
            <option value="finance">Keuangan & Fintech</option>
            <option value="travel">Travel & Pariwisata</option>
            <option value="fashion">Fashion & Pakaian</option>
            <option value="real_estate">Properti & Real Estate</option>
            <option value="entertainment">Hiburan & Media</option>
            <option value="manufacturing">Manufaktur</option>
            <option value="transportation">Transportasi & Logistik</option>
            <option value="agriculture">Pertanian</option>
            <option value="other">Lainnya</option>
          </select>
          {errors.industry && <p className="mt-1 text-sm text-red-600">{errors.industry}</p>}
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Deskripsi Ide Bisnis *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className={`input ${errors.description ? 'border-red-500' : ''}`}
            placeholder="Jelaskan ide bisnis Anda secara rinci. Apa yang ditawarkan? Bagaimana cara kerjanya?"
          ></textarea>
          {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
        </div>
        
        <div>
          <label htmlFor="problemSolving" className="block text-sm font-medium text-gray-700 mb-1">
            Masalah yang Dipecahkan *
          </label>
          <textarea
            id="problemSolving"
            name="problemSolving"
            value={formData.problemSolving}
            onChange={handleChange}
            rows="3"
            className={`input ${errors.problemSolving ? 'border-red-500' : ''}`}
            placeholder="Masalah atau kebutuhan pelanggan apa yang bisnis Anda pecahkan?"
          ></textarea>
          {errors.problemSolving && <p className="mt-1 text-sm text-red-600">{errors.problemSolving}</p>}
        </div>
        
        <div>
          <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700 mb-1">
            Target Audiens *
          </label>
          <textarea
            id="targetAudience"
            name="targetAudience"
            value={formData.targetAudience}
            onChange={handleChange}
            rows="3"
            className={`input ${errors.targetAudience ? 'border-red-500' : ''}`}
            placeholder="Siapa target pelanggan Anda? Deskripsikan demografi, perilaku, dan kebutuhan mereka."
          ></textarea>
          {errors.targetAudience && <p className="mt-1 text-sm text-red-600">{errors.targetAudience}</p>}
        </div>
        
        <div>
          <label htmlFor="uniqueValueProposition" className="block text-sm font-medium text-gray-700 mb-1">
            Proposisi Nilai Unik *
          </label>
          <textarea
            id="uniqueValueProposition"
            name="uniqueValueProposition"
            value={formData.uniqueValueProposition}
            onChange={handleChange}
            rows="3"
            className={`input ${errors.uniqueValueProposition ? 'border-red-500' : ''}`}
            placeholder="Apa yang membuat ide bisnis Anda unik? Mengapa pelanggan harus memilih Anda dibanding alternatif yang ada?"
          ></textarea>
          {errors.uniqueValueProposition && <p className="mt-1 text-sm text-red-600">{errors.uniqueValueProposition}</p>}
        </div>
        
        <div className="flex justify-end">
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

export default IdeaForm;