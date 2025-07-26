import React from 'react';
import { mockVideos } from '../data/mockData';
import VideoGrid from '../components/VideoGrid';

const Subscriptions: React.FC = () => {
  // Filter videos from subscribed channels
  const subscribedVideos = mockVideos.filter(video => 
    ['Chris Thomas', 'NatureVision'].includes(video.channel)
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <VideoGrid videos={subscribedVideos} title="Subscriptions" />
    </div>
  );
};

export default Subscriptions;