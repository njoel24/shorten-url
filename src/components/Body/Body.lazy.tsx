import React, { lazy, Suspense } from 'react';

const LazyBody = lazy(() => import('./Body'));

const Body = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBody {...props} />
  </Suspense>
);

export default Body;
