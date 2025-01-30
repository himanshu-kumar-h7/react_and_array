import React, { useContext } from 'react';
import { ThemeContext } from '/Users/himanshu/Documents/MyProjects/react_and_array/src/Context/Provider.jsx';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
        color: theme === 'light' ? '#000000' : '#ffffff',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h1>The current theme is: {theme}</h1>
      <button onClick={toggleTheme} style={{ padding: '10px', fontSize: '16px' }}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
