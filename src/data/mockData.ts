import { Video, Channel, User } from '../types';

export const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Building a React App from Scratch - Complete Tutorial',
    channel: 'Chris Thomas',
    channelAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1',
    views: '2.1M',
    uploadTime: '2 days ago',
    duration: '15:42',
    description: 'Learn how to build a complete React application from scratch. This comprehensive tutorial covers everything you need to know.',
    likes: '45K',
    dislikes: '1.2K',
    category: 'Technology'
  },
  {
    id: '2',
    title: 'Amazing Nature Photography Tips for Beginners',
    channel: 'NatureVision',
    channelAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    thumbnail: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1',
    views: '856K',
    uploadTime: '5 days ago',
    duration: '22:15',
    description: 'Discover professional photography techniques for capturing stunning nature shots.',
    likes: '23K',
    dislikes: '445',
    category: 'Photography'
  },
  {
    id: '3',
    title: 'LIVE: Breaking News Update',
    channel: 'NewsNow',
    channelAvatar: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    thumbnail: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1',
    views: '125K',
    uploadTime: 'Live now',
    duration: 'LIVE',
    description: 'Stay updated with the latest breaking news from around the world.',
    likes: '3.2K',
    dislikes: '89',
    isLive: true,
    category: 'News'
  },
  {
    id: '4',
    title: 'Cooking the Perfect Pasta - Italian Chef\'s Secret',
    channel: 'CulinaCode',
    channelAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    thumbnail: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1',
    views: '1.8M',
    uploadTime: '1 week ago',
    duration: '18:30',
    description: 'Learn authentic Italian pasta cooking techniques from a professional chef.',
    likes: '67K',
    dislikes: '2.1K',
    category: 'Food'
  },
  {
    id: '5',
    title: 'Epic Mountain Climbing Adventure',
    channel: 'AdventureSeeker',
    channelAvatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    thumbnail: 'https://images.pexels.com/photos/551632/pexels-photo-551632.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1',
    views: '934K',
    uploadTime: '3 days ago',
    duration: '25:45',
    description: 'Join us on an incredible mountain climbing expedition to the highest peaks.',
    likes: '28K',
    dislikes: '567',
    category: 'Adventure'
  },
  {
    id: '6',
    title: 'JavaScript ES6 Features You Must Know',
    channel: 'CodeGuru',
    channelAvatar: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1',
    views: '445K',
    uploadTime: '1 day ago',
    duration: '12:20',
    description: 'Master the most important ES6 features that every JavaScript developer should know.',
    likes: '15K',
    dislikes: '234',
    category: 'Technology'
  },
  {
    id: '7',
    title: 'Relaxing Music for Study and Work',
    channel: 'ZenSounds',
    channelAvatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    thumbnail: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1',
    views: '3.5M',
    uploadTime: '2 weeks ago',
    duration: '2:15:30',
    description: 'Perfect background music for studying, working, or relaxing. Instrumental and ambient sounds.',
    likes: '89K',
    dislikes: '1.8K',
    category: 'Music'
  },
  {
    id: '8',
    title: 'AI and Machine Learning Explained Simply',
    channel: 'TechExplainer',
    channelAvatar: 'https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    thumbnail: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=640&h=360&dpr=1',
    views: '1.2M',
    uploadTime: '4 days ago',
    duration: '19:45',
    description: 'Understanding AI and Machine Learning concepts without the complexity. Perfect for beginners.',
    likes: '34K',
    dislikes: '892',
    category: 'Technology'
  }
];

export const mockChannels: Channel[] = [
  {
    id: '1',
    name: 'Chris Thomas',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    subscribers: '2.1M',
    videos: '234',
    description: 'Your go-to channel for the latest in technology, programming tutorials, and tech reviews.',
    verified: true
  },
  {
    id: '2',
    name: 'NatureVision',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    subscribers: '856K',
    videos: '156',
    description: 'Capturing the beauty of nature through professional photography and videography.',
    verified: false
  }
];

export const mockUser: User = {
  id: '1',
  name: 'Chris Thomas',
  avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
  email: 'christhomas@gmail.com',
  subscriptions: ['1', '2'],
  watchHistory: ['1', '2', '3'],
  likedVideos: ['1', '4', '7']
};