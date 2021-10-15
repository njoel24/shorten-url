import React, { lazy, Suspense } from 'react';

const LazyShort = lazy(() => import('./Short'));

const Short = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyShort {...props} />
  </Suspense>
);

export default Short;
