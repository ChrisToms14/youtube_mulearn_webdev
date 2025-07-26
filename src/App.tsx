import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Watch from './pages/Watch';
import Trending from './pages/Trending';
import Subscriptions from './pages/Subscriptions';
import Library from './pages/Library';
import Search from './pages/Search';
import Channel from './pages/Channel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="watch/:videoId" element={<Watch />} />
          <Route path="trending" element={<Trending />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="library" element={<Library />} />
          <Route path="history" element={<Library />} />
          <Route path="liked" element={<Library />} />
          <Route path="search" element={<Search />} />
          <Route path="channel/:channelName" element={<Channel />} />
          <Route path="explore/:category" element={<Trending />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;