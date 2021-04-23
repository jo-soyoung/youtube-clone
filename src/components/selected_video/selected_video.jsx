import React from 'react';
import styles from './selected_video.module.css';

const SelectedVideo = ({ selectedVideo }) => {
  return (
    <section className={styles.selectedVideo}>
      <iframe
        className={styles.video}
        id="ytplayer"
        type="text/html"
        width="100%"
        src={`https://www.youtube.com/embed/${selectedVideo.id}?modestbranding=1`}
        frameBorder="0"
        title="youtube video player"
        allowFullScreen
      ></iframe>

      <div className={styles.detail}>
        <h2 className={styles.title}>{selectedVideo.snippet.title}</h2>
        <span className={styles.channel}>
          {selectedVideo.snippet.channelTitle}
        </span>
        <pre className={styles.description}>
          {selectedVideo.snippet.description}
        </pre>
      </div>
    </section>
  );
};

export default SelectedVideo;
