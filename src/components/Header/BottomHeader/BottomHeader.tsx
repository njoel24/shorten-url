import React from 'react';
import Button from '../../shared/Button/Button';
import styles from './BottomHeader.module.css';
import {ReactComponent as Illustration } from '../../../assets/illustration-working.svg';

const BottomHeader = () => (
  <div className={styles.BottomHeader} data-testid="BottomHeader">
    <div className={styles.Right}>
      <Illustration />
    </div>
    <div className={styles.Left}>
      <h1>More than just shorten links</h1>
      <h6>Build your brand's recognition and get detailed insight on how your links are performing</h6>
      <Button large active dataTestid="BottomHeaderButton">Get Started</Button>
    </div>
  </div>
);

export default BottomHeader;
