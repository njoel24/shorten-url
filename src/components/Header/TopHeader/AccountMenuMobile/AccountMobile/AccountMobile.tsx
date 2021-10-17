import React from 'react';
import Button from '../../../../shared/Button/Button';
import styles from './AccountMobile.module.css';

const AccountMobile = () => (
  <div className={styles.AccountMobile} data-testid="AccountMobile">
    <Button large stretch>Login</Button>
    <Button large stretch active>Sign up</Button>
  </div>
);

export default AccountMobile;
