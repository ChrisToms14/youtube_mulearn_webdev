import React from 'react';
import { useParams } from 'react-router-dom';
import { ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal } from 'lucide-react';
import { mockVideos } from '../data/mockData';
import VideoCard from '../components/VideoCard';

const Watch: React.FC = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const video = mockVideos.find(v => v.id === videoId);
  const relatedVideos = mockVideos.filter(v => v.id !== videoId).slice(0, 10);

  if (!video) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Video not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="lg:flex lg:space-x-6">
          {/* Main video section */}
          <div className="lg:flex-1">
            {/* Video player */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Video info */}
            <div className="mt-4">
              <h1 className="text-xl font-bold text-white mb-2">{video.title}</h1>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <span>{video.views} views</span>
                    <span>•</span>
                    <span>{video.uploadTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">
                    <ThumbsUp size={20} />
                    <span>{video.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">
                    <ThumbsDown size={20} />
                    <span>{video.dislikes}</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">
                    <Share size={20} />
                    <span>Share</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">
                    <Download size={20} />
                    <span>Download</span>
                  </button>
                  <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Channel info */}
            <div className="mt-6 bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img 
                    src={video.channelAvatar} 
                    alt={video.channel}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-white">{video.channel}</h3>
                    <p className="text-gray-400 text-sm">2.1M subscribers</p>
                  </div>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
                  Subscribe
                </button>
              </div>
              <div className="mt-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          </div>

          {/* Related videos sidebar */}
          <div className="lg:w-96 mt-6 lg:mt-0">
            <h3 className="text-lg font-semibold text-white mb-4">Related Videos</h3>
            <div className="space-y-4">
              {relatedVideos.map((relatedVideo) => (
                <div key={relatedVideo.id} className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <img 
                      src={relatedVideo.thumbnail} 
                      alt={relatedVideo.title}
                      className="w-40 h-24 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-white line-clamp-2 text-sm">
                      {relatedVideo.title}
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">{relatedVideo.channel}</p>
                    <div className="flex items-center space-x-2 text-gray-400 text-xs mt-1">
                      <span>{relatedVideo.views} views</span>
                      <span>•</span>
                      <span>{relatedVideo.uploadTime}</span>
                    </div>
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

export default Watch;