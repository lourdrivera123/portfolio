'use client';

import React, { useState, useEffect } from 'react';
import StaticIconCloud from './StaticIconCloud';
import DynamicIconCloud from './DynamicIconCloud';
import ErrorBoundary from './ErrorBoundary';

const HybridIconCloud = ({ iconSlugs }) => {
  const [useStatic, setUseStatic] = useState(true);
  const [staticFailed, setStaticFailed] = useState(false);

  // Check if pre-built icons are available
  useEffect(() => {
    try {
      require('../../data/prebuilt-icons.json');
      setUseStatic(true);
    } catch (error) {
      console.log('Pre-built icons not available, using dynamic loading');
      setUseStatic(false);
    }
  }, []);

  // Fallback to dynamic if static fails
  const handleStaticError = () => {
    console.warn('Static icon cloud failed, falling back to dynamic');
    setStaticFailed(true);
  };

  if (useStatic && !staticFailed) {
    return (
      <ErrorBoundary onError={handleStaticError}>
        <StaticIconCloud iconSlugs={iconSlugs} />
      </ErrorBoundary>
    );
  }

  // Fallback to dynamic loading
  return (
    <ErrorBoundary>
      <DynamicIconCloud iconSlugs={iconSlugs} />
    </ErrorBoundary>
  );
};

export default HybridIconCloud;
