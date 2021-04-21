import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import Header from './components/header/header';
import VideoList from './components/video_list/video_list';

const App = () => {
  const [videos, setVideos] = useState([]);

  const popularVideos = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCN3U56WnADnsx_XZrWNxwWK8Pjua4teWQ',
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  };

  useEffect(popularVideos, []);

  const onSearch = query => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyCN3U56WnADnsx_XZrWNxwWK8Pjua4teWQ`,
      requestOptions
    )
      .then(response => response.json())
      .then(result =>
        result.items.map(item => ({ ...item, id: item.id.videoId }))
      )
      .then(soyoung => setVideos(soyoung))
      .catch(error => console.log('error', error));
  };

  return (
    <div className={styles.app}>
      <Header onSearch={onSearch} popularVideos={popularVideos} />
      <div className={styles.content}>
        <VideoList videos={videos} />
      </div>
    </div>
  );
};

export default App;
