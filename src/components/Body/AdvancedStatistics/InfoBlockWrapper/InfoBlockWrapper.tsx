import React from 'react';
import InfoBlock from './InfoBlock/InfoBlock';
import styles from './InfoBlockWrapper.module.css';
import {ReactComponent as detailedRecord } from '../../../../assets/icon-detailed-records.svg';
import {ReactComponent as fullyCustom } from '../../../../assets/icon-fully-customizable.svg';
import {ReactComponent as brandRecognition } from '../../../../assets/icon-brand-recognition.svg';

const InfoBlockWrapper = () => (
  <div className={styles.InfoBlockWrapper} data-testid="InfoBlockWrapper">
    <InfoBlock Icon={detailedRecord} title={'Brand Recognition'} description={'Some Description'}></InfoBlock>
    <div className={styles.LinkBlock}></div>
    <InfoBlock Icon={fullyCustom} title={'Detailed Records'} description={'Some Description'}></InfoBlock>
    <div className={styles.LinkBlock}></div>
    <InfoBlock Icon={brandRecognition} title={'Fully Customizable'} description={'Some Description'}></InfoBlock>
  </div>
);

export default InfoBlockWrapper;
