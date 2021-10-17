import React, { useContext, useState } from 'react';
import Button from '../../../shared/Button/Button';
import { ShortContext } from '../Short.provider';
import styles from './Input.module.css';

const Input = () => {
  const [url, setUrl] = useState('');
  const { search } = useContext(ShortContext);

  return (<div className={styles.InputContainer} data-testid="Input">
    <input className={styles.Input} value={url} onChange={(event) => setUrl(event.currentTarget.value)} placeholder='Shorten a link here...' />
    <div className={styles.ButtonContainer} >
      <Button active square large stretch onClickCallback={() => search(url)}>Shorten it!</Button>
    </div>
  </div>)
};

export default Input;
