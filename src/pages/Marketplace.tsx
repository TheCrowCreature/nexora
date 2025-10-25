// src/pages/Marketplace.tsx
import React from 'react';
import CharacterCard from '../components/CharacterCard';
import Header from '../components/Header';

// داده‌های تستی - این داده‌ها باید از طریق API شما از MongoDB واکشی شوند
const mockCharacters = [
  { id: 1, name: "نینجای سایه", price: 1500, image_url: "https://via.placeholder.com/150/000000/FFFFFF?text=Ninja", owner_username: "ali_sadeghi" },
  { id: 2, name: "جادوگر آتش", price: 2200, image_url: "https://via.placeholder.com/150/FF4500/FFFFFF?text=Wizard", owner_username: "zahra_kh" },
  { id: 3, name: "اژدهای یخی", price: 4800, image_url: "https://via.placeholder.com/150/4682B4/FFFFFF?text=Dragon", owner_username: "reza_m" },
];

const Marketplace: React.FC = () => {
  // این تابع باید با منطق واقعی خرید (ارسال درخواست به بک‌اند) جایگزین شود
  const handleBuy = (characterId: number) => {
    alert(`درخواست خرید کاراکتر با آیدی: ${characterId} ارسال شد.`);
    // در اینجا باید از window.Telegram.WebApp.showPopup یا sendData استفاده شود
  };

  return (
    <div style={{ backgroundColor: 'var(--tg-theme-bg-color, #f0f0f0)' }}>
      <Header />
      
      <main className="p-4">
        
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--tg-theme-text-color, #000000)' }}>
          کاراکترهای موجود برای خرید
        </h2>
        
        {/* لیست کاراکترها */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockCharacters.map(char => (
            <CharacterCard 
              key={char.id} 
              character={char} 
              onBuy={handleBuy} 
            />
          ))}
        </div>
        
        {/* دکمه اصلی تلگرام */}
        {window.Telegram && window.Telegram.WebApp && (
          <button
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full shadow-lg font-bold"
            style={{ 
              backgroundColor: 'var(--tg-theme-button-color, #007bff)', 
              color: 'var(--tg-theme-button-text-color, #ffffff)' 
            }}
            onClick={() => window.Telegram.WebApp.close()}
          >
            بستن اپلیکیشن
          </button>
        )}
      </main>
    </div>
  );
};

export default Marketplace;
