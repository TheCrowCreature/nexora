// src/components/Header.tsx
import React, { useState, useEffect } from 'react';

// یک نوع داده ساده برای اطلاعات کاربر
interface UserInfo {
  id: number;
  first_name: string;
  username?: string;
}

const Header: React.FC = () => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const initData = window.Telegram.WebApp.initDataUnsafe;
      if (initData.user) {
        setUser(initData.user as UserInfo);
      }
      // تنظیم تم رنگی برای هماهنگی با تلگرام
      window.Telegram.WebApp.setHeaderColor('bg_color'); // یا 'secondary_bg_color'
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-10 p-4 flex justify-between items-center" style={{ backgroundColor: 'var(--tg-theme-header-bg-color, #ffffff)' }}>
      
      {/* دکمه منو */}
      <button 
        onClick={toggleMenu} 
        className="text-gray-600 hover:text-gray-800 focus:outline-none"
        style={{ color: 'var(--tg-theme-button-color, #000000)' }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
      </button>

      <h1 className="text-xl font-bold" style={{ color: 'var(--tg-theme-text-color, #000000)' }}>
        Nexora Marketplace
      </h1>

      {/* نمایش اطلاعات کاربر */}
      <div className="flex items-center space-x-2">
        {user ? (
          <span className="text-sm font-medium" style={{ color: 'var(--tg-theme-hint-color, #777777)' }}>
            {user.first_name}
          </span>
        ) : (
          <span className="text-sm font-medium" style={{ color: 'var(--tg-theme-hint-color, #777777)' }}>
            کاربر ناشناس
          </span>
        )}
        {/* آواتار ساده */}
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center" style={{ backgroundColor: 'var(--tg-theme-button-color, #000000)', color: 'var(--tg-theme-button-text-color, #ffffff)' }}>
            {user ? user.first_name[0] : '?'}
        </div>
      </div>

      {/* منوی کناری (ساده) */}
      {isMenuOpen && (
        <div className="absolute top-16 left-4 w-48 bg-white shadow-xl rounded-lg py-2 transition-all duration-300" style={{ backgroundColor: 'var(--tg-theme-secondary-bg-color, #f0f0f0)' }}>
          <a href="/profile" className="block px-4 py-2 hover:bg-gray-100" style={{ color: 'var(--tg-theme-text-color, #000000)' }}>پروفایل</a>
          <a href="/sales" className="block px-4 py-2 hover:bg-gray-100" style={{ color: 'var(--tg-theme-text-color, #000000)' }}>فروش‌های من</a>
          <a href="/settings" className="block px-4 py-2 hover:bg-gray-100" style={{ color: 'var(--tg-theme-text-color, #000000)' }}>تنظیمات</a>
        </div>
      )}
    </header>
  );
};

export default Header;
