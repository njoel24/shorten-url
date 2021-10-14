import React from 'react';
import styles from './Button.module.css';

const Button = ({children}) => (
    <button className={styles.Button}>{children}</button>
);

export default Button;
