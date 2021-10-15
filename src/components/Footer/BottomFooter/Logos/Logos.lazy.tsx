import React, { lazy, Suspense } from 'react';

const LazyLogos = lazy(() => import('./Logos'));

const Logos = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLogos {...props} />
  </Suspense>
);

export default Logos;
