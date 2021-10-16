import React from 'react';
import styles from './Menu.module.css';

const Menu = ({children}: {children?: React.ReactNode}) => (
  <div className={styles.BottomFooterMenu} data-testid="BottomFooterMenu">
    {children}
  </div>
);

export default Menu;
