import React, { lazy, Suspense } from 'react';

const LazyTopFooter = lazy(() => import('./TopFooter'));

const TopFooter = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTopFooter {...props} />
  </Suspense>
);

export default TopFooter;
