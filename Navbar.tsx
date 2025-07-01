import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, Instagram, Mail, LogIn, LogOut } from 'lucide-react';
import { useAuth } from '../App';

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  
  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-display font-bold bg-gradient-to-r from-primary-pink to-primary-blue bg-clip-text text-transparent">
              American Pancakes
            </div>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                location.pathname === '/' 
                  ? 'bg-primary-pink text-white' 
                  : 'text-gray-700 hover:bg-primary-pink hover:text-white'
              }`}
            >
              <Home size={18} />
              <span className="hidden sm:inline">Home</span>
            </Link>
            
            <Link 
              to="/menu" 
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                location.pathname === '/menu' 
                  ? 'bg-primary-blue text-white' 
                  : 'text-gray-700 hover:bg-primary-blue hover:text-white'
              }`}
            >
              <Menu size={18} />
              <span className="hidden sm:inline">Menu</span>
            </Link>

            <Link 
              to="/contact" 
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                location.pathname === '/contact' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-700 hover:bg-purple-600 hover:text-white'
              }`}
            >
              <Mail size={18} />
              <span className="hidden sm:inline">Contact</span>
            </Link>
            
            <a 
              href="https://www.instagram.com/_the_american_pancakes_?igsh=em9jZzExZHlxeDRr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-primary-pink hover:to-primary-blue hover:text-white transition-all duration-200"
            >
              <Instagram size={18} />
              <span className="hidden sm:inline">Instagram</span>
            </a>

            {isAuthenticated ? (
              <button
                onClick={logout}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-gray-700 hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                <LogOut size={18} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            ) : (
              <Link 
                to="/login" 
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === '/login' 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-700 hover:bg-green-600 hover:text-white'
                }`}
              >
                <LogIn size={18} />
                <span className="hidden sm:inline">Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;