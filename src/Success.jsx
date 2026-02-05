import React from 'react';
import { CheckCircle } from 'lucide-react';

const Success = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Zahlung erfolgreich! 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Willkommen bei SkillSwap Pro! Dein Account wurde aktiviert.
        </p>
        <a 
          href="/"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 inline-block"
        >
          Zur App
        </a>
      </div>
    </div>
  );
};

export default Success;
