import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';

export type ButtonProps = {
    children?: React.ReactNode;
    large?: boolean;
    active?: boolean;
}

const Button = ({children, large, active}: ButtonProps) => {
    return (
        <button className={classNames(styles.Button, {[styles.large]: large, [styles.active]: active})}>{children}</button>
    )
};

export default Button;
