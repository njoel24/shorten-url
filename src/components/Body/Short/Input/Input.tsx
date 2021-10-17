import classNames from 'classnames';
import React, { useCallback, useContext, useState } from 'react';
import Button from '../../../shared/Button/Button';
import { ShortContext } from '../Short.provider';
import styles from './Input.module.css';

const Input = () => {
  const [url, setUrl] = useState('');
  const [emptySearchError, setEmptySearchError] = useState(false);
  const { search } = useContext(ShortContext);

  const onSearch = useCallback((url: string) => {
    if (!url) {
      setEmptySearchError(true);
      return;
    }
    setEmptySearchError(false);
    search(url)
  }, [search])

  return (<div className={styles.InputContainer} data-testid="Input">
    <div className={styles.InputWrapper}>
      <input className={classNames(styles.Input, {[styles.EmptySearchError]: emptySearchError})} value={url} onChange={(event) => setUrl(event.currentTarget.value)} placeholder='  Shorten a link here...' />
      {emptySearchError && <span className={styles.EmptySearchErrorText}>Please, add a link</span>}
    </div>
    <div className={styles.ButtonContainer} >
      <Button active square large stretch onClickCallback={() => onSearch(url)}>Shorten it!</Button>
    </div>
  </div>)
};

export default Input;
