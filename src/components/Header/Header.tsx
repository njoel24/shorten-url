import React from 'react';
import styles from './Header.module.css';
import TopHeader from './TopHeader/TopHeader';

const Header = () => (
  <header className={styles.Header} data-testid="Header">
    <TopHeader />
  </header>
);

export default Header;
