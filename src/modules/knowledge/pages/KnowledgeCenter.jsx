import React from 'react';
import { motion } from 'framer-motion';
import ArticleCard from '../components/ArticleCard';
import { 
  AcademicCapIcon, 
  BookOpenIcon, 
  ClockIcon, 
  FireIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const articles = [
  {
    id: 1,
    title: 'Menvalidasi Ide Bisnis dengan Metode Lean Canvas',
    description: 'Pelajari cara menggunakan metode Lean Canvas untuk menguji dan memvalidasi ide bisnis Anda dengan cepat dan efektif.',
    category: 'Strategi',
    readTime: '8 menit',
    featured: true,
    icon: <AcademicCapIcon className="h-6 w-6 text-blue-600" />
  },
  {
    id: 2,
    title: 'Riset Pasar yang Efektif untuk Startup',
    description: 'Panduan komprehensif untuk melakukan riset pasar yang akurat dengan budget terbatas, termasuk teknik kualitatif dan kuantitatif.',
    category: 'Riset',
    readTime: '12 menit',
    featured: false,
    icon: <BookOpenIcon className="h-6 w-6 text-green-600" />
  },
  {
    id: 3,
    title: 'Analisis Kompetitor: Identifikasi Peluang dan Ancaman',
    description: 'Teknik untuk menganalisis pesaing dan mengidentifikasi keunggulan kompetitif yang dapat menjadi pembeda bisnis Anda.',
    category: 'Analisis',
    readTime: '10 menit',
    featured: false,
    icon: <FireIcon className="h-6 w-6 text-orange-600" />
  },
  {
    id: 4,
    title: 'Merancang Value Proposition yang Menarik Pelanggan',
    description: 'Cara membuat proposisi nilai yang unik dan menarik bagi target pasar Anda, dengan contoh kasus dari berbagai industri.',
    category: 'Strategi',
    readTime: '7 menit',
    featured: false,
    icon: <UserGroupIcon className="h-6 w-6 text-purple-600" />
  },
  {
    id: 5,
    title: 'Validasi Pasar Tanpa Modal Besar: Teknik dan Strategi',
    description: 'Metode praktis untuk memvalidasi kebutuhan pasar dan permintaan produk tanpa investasi awal yang besar.',
    category: 'Validasi',
    readTime: '9 menit',
    featured: true,
    icon: <ClockIcon className="h-6 w-6 text-red-600" />
  },
  {
    id: 6,
    title: 'Proyeksi Keuangan untuk Bisnis Baru: Panduan Praktis',
    description: 'Cara menyusun proyeksi keuangan yang realistis untuk bisnis baru, termasuk estimasi pendapatan, biaya, dan break-even point.',
    category: 'Keuangan',
    readTime: '15 menit',
    featured: false,
    icon: <AcademicCapIcon className="h-6 w-6 text-blue-600" />
  }
];

const KnowledgeCenter = () => {
  // Find featured articles
  const featuredArticles = articles.filter(article => article.featured);
  // Get remaining articles
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Pusat Pengetahuan Bisnis</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Akses perpustakaan wawasan berisi tips praktis, studi kasus inspiratif, dan pelajaran berharga dari para pakar industri dan founder sukses.
        </p>
      </div>
      
      {/* Featured Articles Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Artikel Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ArticleCard article={article} featured={true} />
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* All Articles Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Artikel Terkini</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ArticleCard article={article} />
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Jelajahi Berdasarkan Kategori</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Strategi', 'Riset', 'Keuangan', 'Validasi', 'Analisis', 'Pemasaran'].map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-md p-4 text-center hover:bg-blue-50 hover:shadow-lg transition-all cursor-pointer"
            >
              <span className="text-gray-800 font-medium">{category}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default KnowledgeCenter;