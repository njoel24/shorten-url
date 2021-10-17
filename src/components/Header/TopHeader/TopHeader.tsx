import React from 'react';
import styles from './TopHeader.module.css';
import {ReactComponent as Logo } from '../../../assets/logo.svg';
import Menu from './Menu/Menu';
import Account from './Account/Account';
import AccountMenuMobile from './AccountMenuMobile/AccountMenuMobile';

const TopHeader = () => (
  <div className={styles.TopHeader} data-testid="TopHeader">
    <div className={styles.Left}>
      <Logo />
      <Menu />
    </div>
    <Account/>
    <AccountMenuMobile />
  </div>
);

export default TopHeader;
