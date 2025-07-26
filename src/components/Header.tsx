import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, Mic, VideoIcon, Bell, User } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-700 px-4 h-16 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button 
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <Menu size={20} />
        </button>
        <Link to="/" className="flex items-center space-x-2">
          {/* YouTube Logo SVG */}
          <svg width="32" height="32" viewBox="0 0 24 24" className="text-red-500">
            <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <span className="font-bold text-xl">YouTube</span>
        </Link>
      </div>

      <div className="flex-1 max-w-2xl mx-8">
        <form onSubmit={handleSearch} className="flex items-center">
          <div className="flex-1 flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="flex-1 bg-gray-800 border border-gray-600 rounded-l-full px-4 py-2 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-gray-700 border border-l-0 border-gray-600 rounded-r-full px-6 py-2 hover:bg-gray-600 transition-colors"
            >
              <Search size={20} />
            </button>
          </div>
          <button
            type="button"
            className="ml-4 p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <Mic size={20} />
          </button>
        </form>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
          <VideoIcon size={20} />
        </button>
        <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
          CT
        </div>
      </div>
    </header>
  );
};

export default Header;