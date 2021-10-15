import React, { lazy, Suspense } from 'react';

const LazyAdvancedStatistics = lazy(() => import('./AdvancedStatistics'));

const AdvancedStatistics = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAdvancedStatistics {...props} />
  </Suspense>
);

export default AdvancedStatistics;
