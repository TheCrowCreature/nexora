// src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Marketplace from './pages/Marketplace';
// import Profile from './pages/Profile'; // اگر صفحه پروفایل را ایجاد کردید

declare global {
  interface Window {
    Telegram: {
      WebApp: any; // برای سادگی، فعلاً از any استفاده می‌شود
    };
  }
}

const App: React.FC = () => {
  useEffect(() => {
    // 1. مقداردهی اولیه Telegram WebApp
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      
      // 2. تنظیم دکمه اصلی (Main Button)
      // اگرچه در Marketplace یک دکمه شناور ایجاد کردیم، استفاده از دکمه اصلی تلگرام استانداردتر است.
      const mainButton = window.Telegram.WebApp.MainButton;
      mainButton.setText("بارگذاری کاراکتر جدید");
      mainButton.show();
      mainButton.onClick(() => {
          // منطق برای باز کردن فرم آپلود یا هدایت به صفحه فروش
          alert("آماده برای آپلود! این تابع باید به ربات پیام دهد.");
      });

      // 3. تنظیم دکمه برگشت (اگر در صفحات داخلی هستید)
      // در حال حاضر چون فقط Marketplace را داریم نیازی نیست.
      // window.Telegram.WebApp.BackButton.onClick(() => { /* منطق برگشت */ });
      // window.Telegram.WebApp.BackButton.show();

    } else {
      console.warn("Telegram WebApp SDK بارگذاری نشد. برنامه در حالت توسعه اجرا می‌شود.");
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Marketplace />} />
          {/* <Route path="/profile" element={<Profile />} />  */}
          {/* مسیرهای دیگر را اینجا اضافه کنید */}
          <Route path="*" element={<Marketplace />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
