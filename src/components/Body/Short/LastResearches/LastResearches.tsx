import React from 'react';
import Button from '../../../shared/Button/Button';
import styles from './LastResearches.module.css';

const LastResearches = () => (
  <div className={styles.LastResearches} data-testid="LastResearches">
    <div className={styles.HistoryItem}>
      <span>https://testtest.com</span><div className={styles.Right}><span>https://kjhsx.com</span><Button active square>Copy</Button></div>
    </div>
    <div className={styles.HistoryItem}>
      <span>https://testtest.com</span><div className={styles.Right}><span>https://kjhsx.com</span><Button active square>Copy</Button></div>
    </div>
    <div className={styles.HistoryItem}>
      <span>https://testtest.com</span><div className={styles.Right}><span>https://kjhsx.com</span><Button active square>Copy</Button></div>
    </div>
  </div>
);

export default LastResearches;
