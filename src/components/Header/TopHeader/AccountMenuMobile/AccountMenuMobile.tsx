import React from 'react';
import Account from '../Account/Account';
import Menu from '../Menu/Menu';
import styles from './AccountMenuMobile.module.css';

export const SHOW_CONTENT_CLASS = styles.Show;

const toggleContentVisibility = () => {
  const content = document.querySelector('#AccountMenuMobile')?.classList;
  if (!content?.contains(SHOW_CONTENT_CLASS)) {
    content?.add(SHOW_CONTENT_CLASS);
  } else {
    content?.remove(SHOW_CONTENT_CLASS);
  }
}
const AccountMenuMobile = () => (
  <div className={styles.AccountMenuMobile} onClick={toggleContentVisibility} data-testid="AccountMenuMobile">
    <div className={styles.Separator}></div>
    <div id='AccountMenuMobile' className={styles.AccountMenuMobileContent}>
      <Menu />
      <Account />
    </div>
  </div>
);

export default AccountMenuMobile;
