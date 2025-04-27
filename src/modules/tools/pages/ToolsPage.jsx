import React from 'react';
import { motion } from 'framer-motion';
import ToolCard from '../components/ToolCard';
import { 
  DocumentTextIcon, 
  PresentationChartBarIcon, 
  TableCellsIcon, 
  ChartPieIcon,
  CurrencyDollarIcon,
  DocumentChartBarIcon,
  CalculatorIcon,
  ArrowsPointingOutIcon
} from '@heroicons/react/24/outline';

const tools = [
  {
    id: 1,
    title: 'Rencana Bisnis Profesional',
    description: 'Template rencana bisnis komprehensif yang mencakup semua komponen penting untuk presentasi ke investor atau pengajuan pendanaan.',
    category: 'Template',
    icon: <DocumentTextIcon className="h-6 w-6 text-blue-600" />
  },
  {
    id: 2,
    title: 'Model Bisnis Kanvas',
    description: 'Template interaktif untuk memetakan elemen kunci model bisnis Anda, termasuk proposisi nilai, segmen pelanggan, dan saluran distribusi.',
    category: 'Template',
    icon: <PresentationChartBarIcon className="h-6 w-6 text-green-600" />
  },
  {
    id: 3,
    title: 'Anggaran Keuangan Bisnis',
    description: 'Spreadsheet lengkap untuk merencanakan dan melacak pengeluaran, pendapatan, dan arus kas bisnis Anda selama 36 bulan ke depan.',
    category: 'Template',
    icon: <TableCellsIcon className="h-6 w-6 text-orange-600" />
  },
  {
    id: 4,
    title: 'Analisis SWOT Interaktif',
    description: 'Tool untuk mengidentifikasi dan menganalisis kekuatan, kelemahan, peluang, dan ancaman bisnis Anda.',
    category: 'Analisis',
    icon: <ChartPieIcon className="h-6 w-6 text-purple-600" />
  },
  {
    id: 5,
    title: 'Kalkulator ROI dan BEP',
    description: 'Alat hitung untuk mengevaluasi Return on Investment (ROI) dan Break-Even Point (BEP) dari bisnis atau proyek Anda.',
    category: 'Kalkulator',
    icon: <CalculatorIcon className="h-6 w-6 text-blue-600" />
  },
  {
    id: 6,
    title: 'Rencana Pemasaran Digital',
    description: 'Template strategi pemasaran digital komprehensif, termasuk analisis audiens, pilihan saluran, dan metrik keberhasilan.',
    category: 'Template',
    icon: <DocumentChartBarIcon className="h-6 w-6 text-red-600" />
  },
  {
    id: 7,
    title: 'Proyeksi Arus Kas 3 Tahun',
    description: 'Spreadsheet proyeksi arus kas detail yang membantu Anda merencanakan dan memvisualisasikan kesehatan finansial bisnis.',
    category: 'Keuangan',
    icon: <CurrencyDollarIcon className="h-6 w-6 text-emerald-600" />
  },
  {
    id: 8,
    title: 'Template Valuasi Bisnis',
    description: 'Tool untuk menghitung valuasi awal bisnis Anda berdasarkan beberapa metode standar industri.',
    category: 'Keuangan',
    icon: <ArrowsPointingOutIcon className="h-6 w-6 text-indigo-600" />
  }
];

const ToolsPage = () => {
  const categories = [...new Set(tools.map(tool => tool.category))];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Perangkat Bisnis</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Koleksi template dan alat bantu analisis yang esensial untuk membantu Anda merencanakan, menganalisis, dan mengembangkan bisnis Anda.
        </p>
      </div>
      
      {/* Categories Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <button className="px-4 py-2 rounded-full bg-blue-600 text-white font-medium">
          Semua
        </button>
        {categories.map(category => (
          <button 
            key={category}
            className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition-colors cursor-pointer"
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <ToolCard tool={tool} />
          </motion.div>
        ))}
      </div>
      
      {/* Premium Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-white"
      >
        <h2 className="text-2xl font-bold mb-3">Akses Template Premium</h2>
        <p className="text-blue-100 mb-6">
          Tingkatkan rencana bisnis Anda dengan akses ke lebih dari 50+ template dan alat premium untuk kebutuhan bisnis yang lebih spesifik.
        </p>
        <button className="btn bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 cursor-pointer">
          Eksplor Template Premium
        </button>
      </motion.div>
    </div>
  );
};

export default ToolsPage;