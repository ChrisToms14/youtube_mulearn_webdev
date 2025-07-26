import React from 'react';
import { mockVideos } from '../data/mockData';
import VideoGrid from '../components/VideoGrid';

const Library: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-6">Library</h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Recently uploaded</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockVideos.slice(0, 4).map((video) => (
                <div key={video.id} className="bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-medium text-white text-sm line-clamp-2">{video.title}</h3>
                    <p className="text-gray-400 text-xs mt-1">{video.channel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Watch later</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockVideos.slice(4, 8).map((video) => (
                <div key={video.id} className="bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-medium text-white text-sm line-clamp-2">{video.title}</h3>
                    <p className="text-gray-400 text-xs mt-1">{video.channel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;