// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // فایل‌هایی که Tailwind باید اسکن کند
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      // می‌توانید پالت رنگی تلگرام را برای سادگی در اینجا تعریف کنید
      colors: {
        'tg-bg': 'var(--tg-theme-bg-color, #ffffff)',
        'tg-text': 'var(--tg-theme-text-color, #000000)',
        'tg-button': 'var(--tg-theme-button-color, #007bff)',
        'tg-button-text': 'var(--tg-theme-button-text-color, #ffffff)',
        'tg-secondary-bg': 'var(--tg-theme-secondary-bg-color, #f0f0f0)',
      },
      fontFamily: {
        sans: ['Vazirmatn', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
