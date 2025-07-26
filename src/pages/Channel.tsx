import React from 'react';
import { useParams } from 'react-router-dom';
import { mockVideos, mockChannels } from '../data/mockData';
import { Bell, CheckCircle } from 'lucide-react';

const Channel: React.FC = () => {
  const { channelName } = useParams<{ channelName: string }>();
  const channel = mockChannels.find(c => c.name === channelName);
  const channelVideos = mockVideos.filter(video => video.channel === channelName);

  if (!channel) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Channel not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Channel header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-gray-800 rounded-lg p-6 -mt-16 relative z-10">
          <div className="flex items-center space-x-6">
            <img 
              src={channel.avatar} 
              alt={channel.name}
              className="w-20 h-20 rounded-full border-4 border-gray-800"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold text-white">{channel.name}</h1>
                {channel.verified && (
                  <CheckCircle size={20} className="text-green-500" />
                )}
              </div>
              <p className="text-gray-400 mt-1">{channel.subscribers} subscribers • {channel.videos} videos</p>
              <p className="text-gray-300 mt-2">{channel.description}</p>
            </div>
            <div className="flex space-x-3">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
                Subscribe
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                <Bell size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Channel navigation */}
        <div className="mt-6 border-b border-gray-700">
          <nav className="flex space-x-8">
            <button className="pb-3 border-b-2 border-white text-white font-medium">
              Videos
            </button>
            <button className="pb-3 text-gray-400 hover:text-white transition-colors">
              Playlists
            </button>
            <button className="pb-3 text-gray-400 hover:text-white transition-colors">
              Community
            </button>
            <button className="pb-3 text-gray-400 hover:text-white transition-colors">
              About
            </button>
          </nav>
        </div>

        {/* Channel videos */}
        <div className="mt-6 pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {channelVideos.map((video) => (
              <div key={video.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <h3 className="font-medium text-white line-clamp-2">{video.title}</h3>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm mt-2">
                    <span>{video.views} views</span>
                    <span>•</span>
                    <span>{video.uploadTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channel;