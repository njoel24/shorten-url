import React from 'react';
import styles from './BottomFooter.module.css';
import {ReactComponent as Logo } from '../../../assets/logo.svg';
import Menu from './Menu/Menu';
import Logos from './Logos/Logos';

const BottomFooter = () => (
  <div className={styles.BottomFooter} data-testid="BottomFooter">
    <div className={styles.Wrapper}>
      <Logo />
      <Menu>
        <div>Features</div>
        <ul>
          <li>
            Link Shortening
          </li>
          <li>
            Branded Links
          </li>
          <li>
            Analytics
          </li>
        </ul>
      </Menu>
      <Menu>
        <div>Resources</div>
        <ul>
          <li>
            Blog
          </li>
          <li>
            Developers
          </li>
          <li>
            Support
          </li>
        </ul>
      </Menu>
      <Menu>
        <div>Company</div>
        <ul>
          <li>
            About
          </li>
          <li>
            Our Team
          </li>
          <li>
            Careers
          </li>
        </ul>
      </Menu>
      <Logos />
    </div>
  </div>
);

export default BottomFooter;
