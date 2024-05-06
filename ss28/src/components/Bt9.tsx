import React, { useState } from 'react';

export default function Bt9() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('english');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'vietnamese' : 'english');
  };

  return (
      <div>
          Bt9:
      <p>Theme: {theme}</p>
      <p>Language: {language}</p>

      <button onClick={toggleTheme}>Toggle Theme</button>

      <button onClick={toggleLanguage}>Toggle Language</button>
    </div>
  );
}
