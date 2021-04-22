import React from 'react';
import styles from './selected_video.module.css';

const SelectedVideo = ({ selectedVideo }) => {
  return (
    <>
      <iframe
        id="ytplayer"
        type="text/html"
        width="720"
        height="405"
        src={`https://www.youtube.com/embed/${selectedVideo.id}?modestbranding=1`}
        frameborder="0"
        allowfullscreen
        className={styles.video}
      />

      <div className={styles.detail}>
        <h2 className={styles.title}>{selectedVideo.snippet.title}</h2>
        <span className={styles.channel}>
          {selectedVideo.snippet.channelTitle}
        </span>
        <pre className={styles.description}>
          {selectedVideo.snippet.description}
        </pre>
      </div>
    </>
  );
};

export default SelectedVideo;
