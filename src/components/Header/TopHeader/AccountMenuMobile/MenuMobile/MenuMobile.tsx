import React from 'react';
import styles from './MenuMobile.module.css';

const MenuMobile = () => (
  <ul className={styles.MenuMobile} data-testid="MenuMobile">
    <li>Features</li>
    <li>Pricing</li>
    <li>Resources</li>
  </ul>
);

export default MenuMobile;
