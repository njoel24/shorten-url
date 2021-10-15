import React, { lazy, Suspense } from 'react';

const LazyInfoBlockWrapper = lazy(() => import('./InfoBlockWrapper'));

const InfoBlockWrapper = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyInfoBlockWrapper {...props} />
  </Suspense>
);

export default InfoBlockWrapper;
