import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockVideos } from '../data/mockData';
import VideoGrid from '../components/VideoGrid';

const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  // Filter videos based on search query
  const filteredVideos = mockVideos.filter(video =>
    video.title.toLowerCase().includes(query.toLowerCase()) ||
    video.channel.toLowerCase().includes(query.toLowerCase()) ||
    video.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-6">
          Search results for "{query}"
        </h1>
        {filteredVideos.length > 0 ? (
          <VideoGrid videos={filteredVideos} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No videos found for "{query}"</p>
            <p className="text-gray-500 text-sm mt-2">Try different keywords or check your spelling</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;