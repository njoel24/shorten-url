import React from 'react';
import Button from '../../../shared/Button/Button';
import styles from './Input.module.css';

const Input = () => (
  <div className={styles.Input} data-testid="Input">
    <input className={styles.InputText} placeholder='Shorten a link here...' />
    <Button active square>Shorten it!</Button>
  </div>
);

export default Input;
