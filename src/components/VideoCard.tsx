import React from 'react';
import { Link } from 'react-router-dom';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors group">
      <Link to={`/watch/${video.id}`}>
        <div className="relative">
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
            {video.duration}
          </div>
          {video.isLive && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              LIVE
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-3">
        <div className="flex space-x-3">
          <Link to={`/channel/${video.channel}`}>
            <img 
              src={video.channelAvatar} 
              alt={video.channel}
              className="w-9 h-9 rounded-full flex-shrink-0"
            />
          </Link>
          <div className="flex-1 min-w-0">
            <Link to={`/watch/${video.id}`}>
              <h3 className="font-medium text-white line-clamp-2 hover:text-gray-300 transition-colors">
                {video.title}
              </h3>
            </Link>
            <Link to={`/channel/${video.channel}`}>
              <p className="text-gray-400 text-sm mt-1 hover:text-gray-300 transition-colors">
                {video.channel}
              </p>
            </Link>
            <div className="flex items-center space-x-2 text-gray-400 text-sm mt-1">
              <span>{video.views} views</span>
              <span>•</span>
              <span>{video.uploadTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;