import React from 'react';
import AdvancedStatistics from './AdvancedStatistics/AdvancedStatistics';
import styles from './Body.module.css';
import Short from './Short/Short';

const Body = () => (
  <div className={styles.Body} data-testid="Body">
    <div className={styles.ContentWrapper}>
      <Short />
      <AdvancedStatistics />
    </div>
  </div>
);

export default Body;
