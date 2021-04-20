import React from 'react';
import styles from './app.module.css';
import Header from './components/header/header';
import VideoList from './components/video_list/video_list';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <VideoList />
    </div>
  );
};

export default App;
