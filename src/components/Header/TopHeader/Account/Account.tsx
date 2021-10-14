import React from 'react';
import Button from '../../../shared/Button/Button';
import styles from './Account.module.css';

const Account = () => (
  <ul className={styles.Account} data-testid="Account">
    <Button>Login</Button>
    <Button>Sign Up</Button>
  </ul>
);

export default Account;
