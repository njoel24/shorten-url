import React from 'react';
import Input from './Input/Input';
import LastResearches from './LastResearches/LastResearches.lazy';
import styles from './Short.module.css';
import { ShortProvider } from './Short.provider';

const Short = () => {
  return (
    <ShortProvider>
      <div className={styles.Short} data-testid="Short">
        <Input />
        <LastResearches />
      </div>
    </ShortProvider>
  )
};

export default Short;
