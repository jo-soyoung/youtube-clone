import React, { useRef } from 'react';
import styles from './header.module.css';

const Header = ({ onSearch, popularVideos }) => {
  const inputRef = useRef();

  const search = e => {
    e.preventDefault();
    const value = inputRef.current.value;
    onSearch(value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={popularVideos}>
        <img src="./images/logo.png" alt="logo" />
        <h1>YouTube</h1>
      </div>

      <form className={styles.searchbar} onSubmit={search}>
        <input type="text" placeholder="Search" ref={inputRef} />
        <button type="submit">
          <img src="./images/search.png" alt="Search" />
        </button>
      </form>
    </header>
  );
};

export default Header;
