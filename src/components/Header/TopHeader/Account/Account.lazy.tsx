import React, { lazy, Suspense } from 'react';

const LazyAccount = lazy(() => import('./Account'));

const Account = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAccount {...props} />
  </Suspense>
);

export default Account;
