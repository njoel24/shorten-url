import React, { lazy, Suspense } from 'react';

const LazyTopHeader = lazy(() => import('./TopHeader'));

const TopHeader = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTopHeader {...props} />
  </Suspense>
);

export default TopHeader;
