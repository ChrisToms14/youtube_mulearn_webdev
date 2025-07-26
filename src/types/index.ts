export interface Video {
  id: string;
  title: string;
  channel: string;
  channelAvatar: string;
  thumbnail: string;
  views: string;
  uploadTime: string;
  duration: string;
  description: string;
  likes: string;
  dislikes: string;
  isLive?: boolean;
  category: string;
}

export interface Channel {
  id: string;
  name: string;
  avatar: string;
  subscribers: string;
  videos: string;
  description: string;
  verified: boolean;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
  subscriptions: string[];
  watchHistory: string[];
  likedVideos: string[];
}