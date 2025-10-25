// src/components/CharacterCard.tsx
import React from 'react';

interface Character {
  id: number;
  name: string;
  price: number;
  image_url: string;
  owner_username: string;
}

interface CharacterCardProps {
  character: Character;
  onBuy: (characterId: number) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onBuy }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-[1.02] cursor-pointer" style={{ backgroundColor: 'var(--tg-theme-secondary-bg-color, #f0f0f0)' }}>
      
      {/* تصویر کاراکتر */}
      <img className="w-full h-48 object-cover" src={character.image_url} alt={character.name} />
      
      <div className="p-4">
        {/* نام کاراکتر */}
        <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--tg-theme-text-color, #000000)' }}>
          {character.name}
        </h3>
        
        {/* اطلاعات مالک و قیمت */}
        <p className="text-sm mb-3" style={{ color: 'var(--tg-theme-hint-color, #777777)' }}>
          فروشنده: @{character.owner_username}
        </p>

        <div className="flex justify-between items-center">
          {/* قیمت */}
          <span className="text-lg font-bold" style={{ color: 'var(--tg-theme-link-color, #2481cc)' }}>
            {character.price.toLocaleString()} $
          </span>
          
          {/* دکمه خرید */}
          <button
            onClick={() => onBuy(character.id)}
            className="px-4 py-2 text-sm rounded-full font-bold"
            style={{ 
              backgroundColor: 'var(--tg-theme-button-color, #007bff)', 
              color: 'var(--tg-theme-button-text-color, #ffffff)' 
            }}
          >
            خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
