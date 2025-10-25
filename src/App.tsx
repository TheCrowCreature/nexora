// src/App.tsx

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Marketplace from './pages/Marketplace';
import Profile from './pages/Profile'; // اگر این فایل را نساختید، این خط را حذف کنید.

declare global {
  interface Window {
    Telegram: {
      WebApp: any; 
    };
  }
}

const App: React.FC = () => {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      
      const mainButton = window.Telegram.WebApp.MainButton;
      mainButton.setText("بارگذاری کاراکتر جدید");
      mainButton.show();
      mainButton.onClick(() => {
          alert("آماده برای آپلود!");
      });
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Marketplace />} />
          
          {/* اگر فایل Profile.tsx را نساخته‌اید، این خط را حذف کنید */}
          <Route path="/profile" element={<Profile />} /> 
          
          <Route path="*" element={<Marketplace />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
