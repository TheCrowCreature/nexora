// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css'; 
import App from './App'; // 🚨 خطا در این خط است: فایل src/App.tsx باید وجود داشته باشد.

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
