import React from 'react';
import InfoBlock from './InfoBlock/InfoBlock';
import styles from './InfoBlockWrapper.module.css';
import {ReactComponent as detailedRecord } from '../../../../assets/icon-detailed-records.svg';
import {ReactComponent as fullyCustom } from '../../../../assets/icon-fully-customizable.svg';
import {ReactComponent as brandRecognition } from '../../../../assets/icon-brand-recognition.svg';

const InfoBlockWrapper = () => (
  <div className={styles.InfoBlockWrapper} data-testid="InfoBlockWrapper">
    <InfoBlock Icon={brandRecognition} title={'Brand Recognition'} description={'Boost your brand recognition with each click. Generic links don\'t mean a thing. Branded links help instil confidence in your content.'}></InfoBlock>
    <div className={styles.LinkBlock}></div>
    <InfoBlock Icon={detailedRecord} title={'Detailed Records'} description={'Gain insights who is clicking your links. Knowing when and where people engage with your content  helps inform better decisions'}></InfoBlock>
    <div className={styles.LinkBlock}></div>
    <InfoBlock Icon={fullyCustom} title={'Fully Customizable'} description={'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement'}></InfoBlock>
  </div>
);

export default InfoBlockWrapper;
