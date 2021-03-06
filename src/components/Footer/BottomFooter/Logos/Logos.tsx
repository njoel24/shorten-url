import React from 'react';
import styles from './Logos.module.css';
import {ReactComponent as Twitter } from '../../../../assets/icon-twitter.svg';
import {ReactComponent as Pinterest } from '../../../../assets/icon-pinterest.svg';
import {ReactComponent as Faceboook } from '../../../../assets/icon-facebook.svg';
import {ReactComponent as Instagram } from '../../../../assets/icon-instagram.svg';

const Logos = () => (
  <div className={styles.Logos} data-testid="Logos">
    <Twitter className={styles.Icon} />
    <Pinterest className={styles.Icon} />
    <Faceboook className={styles.Icon} />
    <Instagram className={styles.Icon} />
  </div>
);

export default Logos;
