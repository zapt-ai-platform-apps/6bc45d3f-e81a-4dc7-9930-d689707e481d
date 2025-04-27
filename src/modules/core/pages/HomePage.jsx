import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FeatureCard from '@/components/common/FeatureCard';
import { 
  ChartBarIcon, 
  DocumentTextIcon, 
  AcademicCapIcon, 
  LightBulbIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon,
  PresentationChartLineIcon,
  ClipboardDocumentListIcon,
  MagnifyingGlassIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: <ChartBarIcon className="h-6 w-6 text-blue-600" />,
    title: "Analisis Mendalam & Skor Kelayakan",
    description: "Analisis komprehensif terhadap potensi pasar, persaingan, kelayakan finansial, dan faktor risiko."
  },
  {
    icon: <DocumentTextIcon className="h-6 w-6 text-blue-600" />,
    title: "Panduan Langkah-demi-Langkah",
    description: "Panduan terstruktur dari validasi konsep hingga skala operasi, disesuaikan dengan industri Anda."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6 text-blue-600" />,
    title: "Pusat Pengetahuan Bisnis",
    description: "Akses perpustakaan wawasan berisi tips praktis, studi kasus inspiratif, dan pelajaran berharga."
  },
  {
    icon: <ClipboardDocumentListIcon className="h-6 w-6 text-blue-600" />,
    title: "Template & Alat Bantu Analisis",
    description: "Koleksi template siap pakai: Rencana Bisnis, Model Kanvas, Anggaran Keuangan, dan lainnya."
  },
  {
    icon: <MagnifyingGlassIcon className="h-6 w-6 text-blue-600" />,
    title: "Riset Pasar & Analisis Tren",
    description: "Akses data riset pasar relevan dan analisis tren industri yang terus diperbarui."
  },
  {
    icon: <LightBulbIcon className="h-6 w-6 text-blue-600" />,
    title: "Generator Ide & Inspirasi",
    description: "Picu kreativitas dengan konsep-konsep potensial berdasarkan tren pasar dan preferensi industri."
  },
  {
    icon: <BoltIcon className="h-6 w-6 text-blue-600" />,
    title: "Rekomendasi Strategis",
    description: "Saran yang disesuaikan untuk optimasi produk, model pendapatan, dan strategi pemasaran."
  },
  {
    icon: <ShieldCheckIcon className="h-6 w-6 text-blue-600" />,
    title: "Pemetaan Risiko & Kompetitor",
    description: "Identifikasi potensi risiko secara proaktif dan analisis kekuatan dan kelemahan kompetitor."
  },
  {
    icon: <CurrencyDollarIcon className="h-6 w-6 text-blue-600" />,
    title: "Proyeksi & Simulasi Finansial",
    description: "Buat dan uji berbagai skenario keuangan untuk memahami potensi profitabilitas bisnis Anda."
  },
  {
    icon: <PresentationChartLineIcon className="h-6 w-6 text-blue-600" />,
    title: "Dashboard Kinerja",
    description: "Pantau kemajuan bisnis Anda secara visual dan lakukan evaluasi berkala terhadap rencana Anda."
  }
];

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: a: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Validator Ide Bisnis
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Validasi Cerdas, Eksekusi Tepat - Ubah ide cemerlang Anda menjadi bisnis sukses dengan fondasi yang kokoh!
            </p>
            <Link 
              to="/validate"
              className="btn btn-primary bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 text-lg shadow-lg"
            >
              Mulai Validasi Ide
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Fitur Unggulan</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Platform lengkap untuk memberdayakan perjalanan bisnis Anda, dari konsep awal hingga peluncuran dan pertumbuhan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Siap Memvalidasi Ide Bisnis Anda?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Jangan biarkan ketidakpastian menghambat potensi bisnis Anda. Mulai perjalanan Anda hari ini dengan Validator Ide Bisnis!
            </p>
            <Link 
              to="/validate"
              className="btn btn-primary px-8 py-3 text-lg shadow-md"
            >
              Mulai Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;