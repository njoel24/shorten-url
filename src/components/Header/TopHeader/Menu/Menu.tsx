import React from 'react';
import styles from './Menu.module.css';

const Menu = () => (
  <ul className={styles.Menu} data-testid="Menu">
    <li>Features</li>
    <li>Pricing</li>
    <li>Resources</li>
  </ul>
);

export default Menu;
