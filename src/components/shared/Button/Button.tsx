import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';

export type ButtonProps = {
    children?: React.ReactNode;
    large?: boolean;
    active?: boolean;
    square?: boolean
}

const Button = ({children, large, active, square}: ButtonProps) => {
    return (
        <button className={classNames(styles.Button, {[styles.large]: large, [styles.active]: active, [styles.square]: square})}>{children}</button>
    )
};

export default Button;
