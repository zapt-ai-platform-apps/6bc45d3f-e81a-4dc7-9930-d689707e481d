import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white shadow-inner mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              Validator Ide Bisnis
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Ubah ide cemerlang Anda menjadi bisnis sukses dengan fondasi yang kokoh!
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              Navigasi
            </h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-500 hover:text-blue-600">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/validate" className="text-sm text-gray-500 hover:text-blue-600">
                  Validator Ide
                </Link>
              </li>
              <li>
                <Link to="/knowledge" className="text-sm text-gray-500 hover:text-blue-600">
                  Pusat Pengetahuan
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-sm text-gray-500 hover:text-blue-600">
                  Perangkat Bisnis
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="#" className="text-sm text-gray-500 hover:text-blue-600">
                  Syarat dan Ketentuan
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-500 hover:text-blue-600">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Validator Ide Bisnis. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;