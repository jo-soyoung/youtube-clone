import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import Header from './components/header/header';
import VideoList from './components/video_list/video_list';
import SelectedVideo from './components/selected_video/selected_video';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

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
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  };

  const onSelect = video => {
    setSelectedVideo(video);
  };

  return (
    <div className={styles.app}>
      <Header onSearch={onSearch} popularVideos={popularVideos} />

      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.selectedVideo}>
            <SelectedVideo selectedVideo={selectedVideo} />
          </div>
        )}

        <div className={styles.videoList}>
          <VideoList
            onSelect={onSelect}
            videos={videos}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
};

export default App;
