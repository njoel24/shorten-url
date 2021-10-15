import React from 'react';
import Button from '../../shared/Button/Button';
import styles from './TopFooter.module.css';

const TopFooter = () => (
  <div className={styles.TopFooter} data-testid="TopFooter">
    <h1>Boost your Links today</h1>
    <Button active>Get Started</Button>
  </div>
);

export default TopFooter;
