'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'next-themes';
import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
} from 'react-icon-cloud';

export const cloudProps = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === 'light' ? '#f3f2ef' : '#080510';
  const fallbackHex = theme === 'light' ? '#6e6e73' : '#ffffff';
  const minContrastRatio = theme === 'dark' ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      role: 'presentation',
      'aria-hidden': true,
      onClick: (e) => e.preventDefault(),
    },
  });
};

const IconCloud = React.memo(function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
    let cancelled = false;
    
    // Environment variable to force error state for testing
    if (process.env.NEXT_PUBLIC_FORCE_ICONCLOUD_ERROR === 'true') {
      console.log('IconCloud: Forcing error state for testing');
      setHasError(true);
      return;
    }
    
    // Triple validation to prevent the slugs error
    if (!iconSlugs) {
      console.warn('IconCloud: iconSlugs is undefined');
      return;
    }
    
    if (!Array.isArray(iconSlugs)) {
      console.warn('IconCloud: iconSlugs is not an array:', typeof iconSlugs);
      return;
    }
    
    if (iconSlugs.length === 0) {
      console.warn('IconCloud: iconSlugs array is empty');
      return;
    }

    // Create a safe options object
    const safeOptions = {
      slugs: iconSlugs
    };

    // Validate that the options object is properly formed
    if (!safeOptions.slugs || !Array.isArray(safeOptions.slugs)) {
      console.error('IconCloud: Failed to create safe options object');
      setHasError(true);
      return;
    }

    try {
      fetchSimpleIcons(safeOptions).then((result) => {
        if (!cancelled) {
          setData(result);
        }
      }).catch((error) => {
        console.error('Error fetching simple icons:', error);
        if (!cancelled) {
          setData(null);
          setHasError(true);
        }
      });
    } catch (syncError) {
      console.error('Synchronous error in fetchSimpleIcons:', syncError);
      if (!cancelled) {
        setHasError(true);
      }
    }

    return () => {
      cancelled = true;
    };
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data || !data.simpleIcons) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, 'dark'),
    );
  }, [data, theme]);

  // Prevent hydration mismatch by only rendering on client
  if (!isMounted) {
    return (
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '400px', // Approximate height to prevent layout shift
          paddingTop: 40,
        }}
      >
        <div className="animate-pulse text-zinc-500 dark:text-zinc-400">
          Loading...
        </div>
      </div>
    );
  }

  // Handle error state gracefully
  if (hasError) {
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
          <div className="mb-2">⚠️</div>
          <div className="text-sm">Skills visualization temporarily unavailable</div>
          {process.env.NODE_ENV === 'development' && (
            <div className="text-xs mt-2 opacity-60">
              Set NEXT_PUBLIC_FORCE_ICONCLOUD_ERROR=true to test this state
            </div>
          )}
        </div>
      </div>
    );
  }

  // Don't render if no icons are loaded
  if (!renderedIcons || renderedIcons.length === 0) {
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
          <div className="mb-2">📦</div>
          <div className="text-sm">Loading skills...</div>
        </div>
      </div>
    );
  }

  return (
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
});

export default IconCloud;