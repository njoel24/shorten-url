import React, { lazy, Suspense } from 'react';

const LazyLastResearches = lazy(() => import('./LastResearches'));

const LastResearches = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLastResearches {...props} />
  </Suspense>
);

export default LastResearches;
