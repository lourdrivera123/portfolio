'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Loading component for the icon cloud
const IconCloudLoading = () => (
  <div 
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '400px',
      paddingTop: 40,
    }}
  >
    <div className="text-zinc-500 dark:text-zinc-400 text-center">
      <div className="mb-2 animate-pulse">🔄</div>
      <div className="text-sm">Loading skills visualization...</div>
    </div>
  </div>
);

// Dynamically import IconCloud with no SSR
const IconCloud = dynamic(() => import('./icon-cloud'), {
  ssr: false, // This eliminates SSR/hydration issues completely
  loading: IconCloudLoading,
});

// Wrapper component with additional safety checks
const DynamicIconCloud = ({ iconSlugs }) => {
  // Client-side safety checks before passing to IconCloud
  if (typeof window === 'undefined') {
    return <IconCloudLoading />;
  }

  if (!iconSlugs || !Array.isArray(iconSlugs) || iconSlugs.length === 0) {
    return (
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '400px',
          paddingTop: 40,
        }}
      >
        <div className="text-zinc-500 dark:text-zinc-400 text-center">
          <div className="mb-2">🛠️</div>
          <div className="text-sm">Skills data not available</div>
        </div>
      </div>
    );
  }

  return <IconCloud iconSlugs={iconSlugs} />;
};

export default DynamicIconCloud;
