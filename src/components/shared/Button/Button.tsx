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
    stretch?: boolean
    shrink?: boolean;
    onClickCallback?: (event: any) => void;
}

const Button = ({children, large, active, square, onClickCallback, id, dataTestid, stretch, shrink}: ButtonProps) => {
    return (
        <button data-testid={dataTestid} id={id} className={classNames(styles.Button, {[styles.shrink]: shrink, [styles.stretch]: stretch, [styles.large]: large, [styles.active]: active, [styles.square]: square})} onClick={onClickCallback}>{children}</button>
    )
};

export default Button;
