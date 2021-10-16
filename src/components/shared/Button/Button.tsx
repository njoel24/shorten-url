import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';

export type ButtonProps = {
    id?: string;
    dataTestid?: string
    children?: React.ReactNode;
    large?: boolean;
    active?: boolean;
    square?: boolean;
    onClickCallback?: (event: any) => void;
}

const Button = ({children, large, active, square, onClickCallback, id, dataTestid}: ButtonProps) => {
    return (
        <button data-testid={dataTestid} id={id} className={classNames(styles.Button, {[styles.large]: large, [styles.active]: active, [styles.square]: square})} onClick={onClickCallback}>{children}</button>
    )
};

export default Button;
