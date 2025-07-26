import React from 'react';
import { mockVideos } from '../data/mockData';
import VideoGrid from '../components/VideoGrid';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <VideoGrid videos={mockVideos} />
    </div>
  );
};

export default Home;