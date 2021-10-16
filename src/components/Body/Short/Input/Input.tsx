import React, { useContext, useState } from 'react';
import Button from '../../../shared/Button/Button';
import { ShortContext } from '../Short.provider';
import styles from './Input.module.css';

const Input = () => {
  const [url, setUrl] = useState('');
  const { search } = useContext(ShortContext);

  return (<div className={styles.Input} data-testid="Input">
    <input className={styles.InputText} value={url} onChange={(event) => setUrl(event.currentTarget.value)} placeholder='Shorten a link here...' />
    <Button active square large onClickCallback={() => search(url)}>Shorten it!</Button>
  </div>)
};

export default Input;
