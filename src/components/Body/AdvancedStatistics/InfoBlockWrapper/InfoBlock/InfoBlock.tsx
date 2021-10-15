import React, { FunctionComponent, SVGProps } from 'react';
import styles from './InfoBlock.module.css';

export type InfoBlockProps = {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  title?: string;
  description?: string;
}

const InfoBlock = ({description, Icon, title}: InfoBlockProps) => (
  <div className={styles.InfoBlock} data-testid="InfoBlock">
    <div className={styles.IconWrapper}>
      <Icon />
    </div>
    <h3>{title}</h3>
    <h6>{description}</h6>
  </div>
);

export default InfoBlock;
