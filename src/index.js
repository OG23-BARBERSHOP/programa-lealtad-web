import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Este es el archivo CSS principal (donde Tailwind se procesa)
import App from './App'; // Importa el componente principal
import reportWebVitals from './reportWebVitals';

// Crea la raíz de la aplicación React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza el componente App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();