import React, { useCallback, useContext } from 'react';
import { copyToClipBoard } from '../../../../utils/browserUtils';
import Button from '../../../shared/Button/Button';
import { ShortContext } from '../Short.provider';
import styles from './LastResearches.module.css';

const LastResearches = () => {
  const {lastResearches} = useContext(ShortContext);
  const handleCopy = useCallback((original_link: string, event: React.MouseEvent<HTMLButtonElement>) => {
    copyToClipBoard(original_link);
    (event.target as any).innerHTML = 'Copied'; 
  }, []);
  return (
    <div className={styles.LastResearches} data-testid="LastResearches">
      {lastResearches.map(({original_link, short_link}) => {
        const id = Math.random().toString();
        return (
          <div key={Math.random()} className={styles.HistoryItem}>
            <span>{original_link}</span>
            <div className={styles.Right}>
              <span>{short_link}</span>
              <Button id={id} active square onClickCallback={(event) => handleCopy(original_link, event)}>{'Copy'}</Button>
            </div>
          </div>
        )
      })}
    </div>
  );
} 

export default LastResearches;
