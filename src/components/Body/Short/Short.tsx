import React from 'react';
import Input from './Input/Input';
import LastResearches from './LastResearches/LastResearches';
import styles from './Short.module.css';

const Short = () => (
  <div className={styles.Short} data-testid="Short">
    <Input />
    <LastResearches />
  </div>
);

export default Short;
