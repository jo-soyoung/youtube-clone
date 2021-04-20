import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import Header from './components/header/header';
import VideoList from './components/video_list/video_list';

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
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
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.content}>
        <VideoList videos={videos} />
      </div>
    </div>
  );
};

export default App;
