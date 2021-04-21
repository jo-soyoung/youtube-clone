import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video: { snippet } }) => {
  return (
    <li className={styles.videoItem}>
      <img
        src={snippet.thumbnails.high.url}
        alt="thumbnail"
        title={snippet.title}
        className={styles.thumbnail}
      />
      <h2 className={styles.title} title={snippet.title}>
        {snippet.title}
      </h2>
      <span className={styles.channel}>{snippet.channelTitle}</span>
    </li>
  );
};

export default VideoItem;
