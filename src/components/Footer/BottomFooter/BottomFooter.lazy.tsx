import React, { lazy, Suspense } from 'react';

const LazyBottomFooter = lazy(() => import('./BottomFooter'));

const BottomFooter = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBottomFooter {...props} />
  </Suspense>
);

export default BottomFooter;
