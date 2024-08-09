import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa createRoot
import App from './App';
import './index.css'; // ou qualquer arquivo CSS que você esteja usando

const root = ReactDOM.createRoot(document.getElementById('root')); // Cria a raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
