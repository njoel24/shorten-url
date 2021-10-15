import React, { FunctionComponent, lazy, Suspense, SVGProps } from 'react';

const LazyInfoBlock = lazy(() => import('./InfoBlock'));

const InfoBlock = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; Icon: FunctionComponent<SVGProps<SVGSVGElement>> }) => (
  <Suspense fallback={null}>
    <LazyInfoBlock {...props} />
  </Suspense>
);

export default InfoBlock;
