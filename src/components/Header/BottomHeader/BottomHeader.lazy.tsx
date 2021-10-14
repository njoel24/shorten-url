import React, { lazy, Suspense } from 'react';

const LazyBottomHeader = lazy(() => import('./BottomHeader'));

const BottomHeader = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBottomHeader {...props} />
  </Suspense>
);

export default BottomHeader;
