import React, { useContext } from 'react';
import Button from '../../../shared/Button/Button';
import { ShortContext } from '../Short.provider';
import styles from './LastResearches.module.css';

const LastResearches = () => {
  const {lastResearches} = useContext(ShortContext);

  return (
    <div className={styles.LastResearches} data-testid="LastResearches">
      {lastResearches.map(({original_link, short_link}) => (
        <div key={Math.random()} className={styles.HistoryItem}>
          <span>{original_link}</span><div className={styles.Right}><span>{short_link}</span><Button active square>Copy</Button></div>
        </div>
      ))}
    </div>
  );
} 

export default LastResearches;
