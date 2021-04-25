import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import Header from './components/header/header';
import VideoList from './components/video_list/video_list';
import SelectedVideo from './components/selected_video/selected_video';

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const popularVideos = () => {
    youtube
      .popularVideos()
      .then(videos => setVideos(videos))
      .catch(error => console.log('error', error));

    setSelectedVideo(null);
  };

  useEffect(popularVideos, [youtube]);

  const onSearch = query => {
    youtube
      .onSearch(query)
      .then(videos => setVideos(videos))
      .catch(error => console.log('error', error));

    setSelectedVideo(null);
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
