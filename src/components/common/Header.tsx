import React from 'react';
import { BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const location = useLocation();
  const isQuizActive = location.pathname.includes('/quiz/');
  
  if (isQuizActive) {
    return null;
  }
  
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-primary-600 dark:text-primary-400" />
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">NPTEL Quiz</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Prepare for Swayam courses</p>
          </div>
        </Link>
        
        <div className="flex items-center space-x-6">
          <nav className="flex space-x-6">
            <Link 
              to="/" 
              className={`text-sm font-medium ${
                location.pathname === '/' 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/analysis" 
              className={`text-sm font-medium ${
                location.pathname.includes('/analysis') 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Analysis
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;