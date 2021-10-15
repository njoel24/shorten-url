import React from 'react';
import BottomFooter from './BottomFooter/BottomFooter';
import styles from './Footer.module.css';
import TopFooter from './TopFooter/TopFooter';

const Footer = () => (
  <div className={styles.Footer} data-testid="Footer">
    <TopFooter />
    <BottomFooter />
  </div>
);

export default Footer;
