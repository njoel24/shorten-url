import React from 'react';
import styles from './TopHeader.module.css';
import {ReactComponent as Logo } from '../../../assets/logo.svg';
import Menu from './Menu/Menu';
import Account from './Account/Account';

const TopHeader = () => (
  <div className={styles.TopHeader} data-testid="TopHeader">
    <div className={styles.Left}>
      <Logo />
      <Menu />
    </div>
    <Account/>
  </div>
);

export default TopHeader;
