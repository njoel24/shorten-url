import React from 'react';
import styles from './AdvancedStatistics.module.css';
import InfoBlockWrapper from './InfoBlockWrapper/InfoBlockWrapper';

const AdvancedStatistics = () => (
  <div className={styles.AdvancedStatistics} data-testid="AdvancedStatistics">
    <h1>Advanced Statistics</h1>
    <h6>Track how your links are performing across the web with our advanced statitics dashboard</h6>
    <InfoBlockWrapper />
  </div>
);

export default AdvancedStatistics;
