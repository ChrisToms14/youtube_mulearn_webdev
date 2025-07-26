import React from 'react';
import { mockVideos } from '../data/mockData';
import VideoGrid from '../components/VideoGrid';

const Trending: React.FC = () => {
  // Sort videos by views for trending
  const trendingVideos = [...mockVideos].sort((a, b) => {
    const aViews = parseFloat(a.views.replace(/[^\d.]/g, ''));
    const bViews = parseFloat(b.views.replace(/[^\d.]/g, ''));
    return bViews - aViews;
  });

  return (
    <div className="min-h-screen bg-gray-900">
      <VideoGrid videos={trendingVideos} title="Trending" />
    </div>
  );
};

export default Trending;