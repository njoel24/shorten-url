import React from 'react';
import BottomHeader from './BottomHeader/BottomHeader';
import styles from './Header.module.css';
import TopHeader from './TopHeader/TopHeader';

const Header = () => (
  <header className={styles.Header} data-testid="Header">
    <div className={styles.HeaderWrapper}>
      <TopHeader />
      <BottomHeader />
    </div>
  </header>
);

export default Header;
