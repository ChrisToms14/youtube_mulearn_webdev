import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  TrendingUp, 
  Music, 
  PlayCircle, 
  Clock, 
  ThumbsUp, 
  Flame,
  ShoppingBag,
  Film,
  Gamepad2,
  Newspaper,
  Trophy,
  Settings,
  Flag,
  HelpCircle,
  MessageSquare,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/trending', icon: TrendingUp, label: 'Trending' },
    { path: '/subscriptions', icon: PlayCircle, label: 'Subscriptions' },
  ];

  const libraryItems = [
    { path: '/library', icon: PlayCircle, label: 'Library' },
    { path: '/history', icon: Clock, label: 'History' },
    { path: '/liked', icon: ThumbsUp, label: 'Liked videos' },
  ];

  const exploreItems = [
    { path: '/explore/trending', icon: Flame, label: 'Trending' },
    { path: '/explore/shopping', icon: ShoppingBag, label: 'Shopping' },
    { path: '/explore/music', icon: Music, label: 'Music' },
    { path: '/explore/movies', icon: Film, label: 'Movies' },
    { path: '/explore/gaming', icon: Gamepad2, label: 'Gaming' },
    { path: '/explore/news', icon: Newspaper, label: 'News' },
    { path: '/explore/sports', icon: Trophy, label: 'Sports' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed left-0 top-16 h-full w-64 bg-gray-900 border-r border-gray-700 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:z-0`}
      >
        <div className="p-4">
          {/* Close button for mobile */}
          <button 
            onClick={onClose}
            className="lg:hidden mb-4 p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>

          {/* Main navigation */}
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive(item.path) 
                    ? 'bg-gray-800 text-white' 
                    : 'hover:bg-gray-800 text-gray-300'
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <hr className="my-4 border-gray-700" />

          {/* Library */}
          <div>
            <h3 className="px-3 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wide">
              Library
            </h3>
            <nav className="space-y-1">
              {libraryItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive(item.path) 
                      ? 'bg-gray-800 text-white' 
                      : 'hover:bg-gray-800 text-gray-300'
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          <hr className="my-4 border-gray-700" />

          {/* Explore */}
          <div>
            <h3 className="px-3 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wide">
              Explore
            </h3>
            <nav className="space-y-1">
              {exploreItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive(item.path) 
                      ? 'bg-gray-800 text-white' 
                      : 'hover:bg-gray-800 text-gray-300'
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          <hr className="my-4 border-gray-700" />

          {/* Footer links */}
          <div className="space-y-1">
            <Link to="/settings" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
              <Settings size={20} />
              <span>Settings</span>
            </Link>
            <Link to="/report" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
              <Flag size={20} />
              <span>Report history</span>
            </Link>
            <Link to="/help" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
              <HelpCircle size={20} />
              <span>Help</span>
            </Link>
            <Link to="/feedback" className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 transition-colors">
              <MessageSquare size={20} />
              <span>Send feedback</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;