import React from 'react';
import styles from './header.module.css';

const Header = props => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="./images/logo.png" alt="logo" />
        <h1>YouTube</h1>
      </div>

      <form className={styles.searchbar}>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <img src="./images/search.png" alt="Search" />
        </button>
      </form>
    </header>
  );
};

export default Header;
