import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Halaman Tidak Ditemukan</h2>
      <p className="text-lg text-gray-600 max-w-md mb-8">
        Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin telah dipindahkan atau dihapus.
      </p>
      <Link
        to="/"
        className="btn btn-primary px-6 py-3"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFoundPage;