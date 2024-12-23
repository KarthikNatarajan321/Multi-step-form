import { useState } from 'react';

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
        <header className="bg-white dark:bg-gray-900 p-4 shadow-md flex justify-between">
          <h1 className="text-xl font-bold dark:text-white">Multi-Step Form</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-md"
          >
            Toggle Dark Mode
          </button>
        </header>
        <main className="p-4">{children}</main>
        <footer className="text-center p-4 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
          &copy; 2024 Multi-Step Form
        </footer>
      </div>
    </div>
  );
}
