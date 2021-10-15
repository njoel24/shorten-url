import React from 'react';
import styles from './Menu.module.css';

const Menu = ({children}: {children?: React.ReactNode}) => (
  <div className={styles.Menu} data-testid="Menu">
    {children}
  </div>
);

export default Menu;
