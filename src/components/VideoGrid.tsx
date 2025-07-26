import React from 'react';
import { Video } from '../types';
import VideoCard from './VideoCard';

interface VideoGridProps {
  videos: Video[];
  title?: string;
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos, title }) => {
  return (
    <div className="p-6">
      {title && (
        <h2 className="text-2xl font-bold mb-6 text-white">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;