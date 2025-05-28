import React, { useState } from 'react';
import ProductosCRUD from './components/ProductosCRUD';
import UsuariosCRUD from './components/UsuariosCRUD';
import PDFExport from './components/PDFExport';

export default function App() {
  const [tab, setTab] = useState('productos');

  return (
    <div className="min-h-screen bg-pink-100 p-6 font-sans">
      <header className="mb-6 text-center text-3xl font-bold text-pink-600 flex justify-center items-center gap-2">
        LE FIT <span></span>
      </header>

      <div className="flex gap-4 mb-6 justify-center">
        <button
          className={`px-5 py-2 rounded shadow transition-all duration-300 font-semibold flex items-center gap-2 ${
            tab === 'productos'
              ? 'bg-pink-400 text-white'
              : 'bg-white text-pink-500 border border-pink-300'
          }`}
          onClick={() => setTab('productos')}
        >
          Productos <span>🛍️</span>
        </button>
        <button
          className={`px-5 py-2 rounded shadow transition-all duration-300 font-semibold flex items-center gap-2 ${
            tab === 'usuarios'
              ? 'bg-pink-400 text-white'
              : 'bg-white text-pink-500 border border-pink-300'
          }`}
          onClick={() => setTab('usuarios')}
        >
          Usuarios <span>👩‍💻</span>
        </button>
      </div>

      <div className="bg-white bg-opacity-70 p-6 rounded-xl shadow-md max-w-4xl mx-auto mb-6">
        {tab === 'productos' ? <ProductosCRUD /> : <UsuariosCRUD />}
      </div>

      <div className="flex justify-center">
        <PDFExport />
      </div>
    </div>
  );
}
