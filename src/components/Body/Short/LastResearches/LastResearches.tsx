import React, { useCallback, useContext } from 'react';
import { copyToClipBoard } from '../../../../utils/browserUtils';
import Button from '../../../shared/Button/Button';
import { ShortContext } from '../Short.provider';
import styles from './LastResearches.module.css';

const LastResearches = () => {
  const {lastResearches} = useContext(ShortContext);
  const handleCopy = useCallback((original_link: string, event: React.MouseEvent<HTMLButtonElement>) => {
    copyToClipBoard(original_link);
    document.querySelectorAll('.tempButtonCopyClass')?.forEach((el) => {
      (event.target as any).classList.remove('tempButtonCopyClass');
       el.innerHTML = 'Copy'
    });
    (event.target as any).classList.add('tempButtonCopyClass');
    (event.target as any).innerHTML = 'Copied'; 
  }, []);
  return (
    <div className={styles.LastResearches} data-testid="LastResearches">
      {lastResearches.map(({original_link, short_link}) => {
        const id = Math.random().toString();
        return (
          <div key={Math.random()} className={styles.HistoryItem}>
            <span className={styles.OriginalLink}>{original_link}</span>
            <div className={styles.Right}>
              <span>{short_link}</span>
              <div className={styles.ButtonContainer}>
                <Button id={id} active square stretch shrink onClickCallback={(event) => handleCopy(original_link, event)}>{'Copy'}</Button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
} 

export default LastResearches;
