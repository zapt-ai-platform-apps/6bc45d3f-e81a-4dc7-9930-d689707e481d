import React from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const EmptyState = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 text-center">
      <div className="mx-auto h-24 w-24 flex items-center justify-center rounded-full bg-blue-50 mb-4">
        <DocumentTextIcon className="h-12 w-12 text-blue-600" />
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Belum Ada Ide Bisnis</h2>
      <p className="text-gray-600 mb-6 max-w-lg mx-auto">
        Anda belum memvalidasi ide bisnis apapun. Mulai validasi ide pertama Anda sekarang untuk mendapatkan analisis mendalam.
      </p>
      <Link
        to="/validate"
        className="btn btn-primary inline-flex items-center px-6 py-3"
      >
        <PlusIcon className="h-5 w-5 mr-2" />
        Mulai Validasi Ide Bisnis
      </Link>
    </div>
  );
};

export default EmptyState;