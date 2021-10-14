import React from 'react';
import BottomHeader from './BottomHeader/BottomHeader';
import styles from './Header.module.css';
import TopHeader from './TopHeader/TopHeader';

const Header = () => (
  <header className={styles.Header} data-testid="Header">
    <TopHeader />
    <BottomHeader />
  </header>
);

export default Header;
