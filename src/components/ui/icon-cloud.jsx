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
    // dragControl: false,
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
  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
    let cancelled = false;
    
    // Only fetch if iconSlugs is defined and not empty
    if (iconSlugs && Array.isArray(iconSlugs) && iconSlugs.length > 0) {
      fetchSimpleIcons({ slugs: iconSlugs }).then((result) => {
        if (!cancelled) {
          setData(result);
        }
      }).catch((error) => {
        console.error('Error fetching simple icons:', error);
        if (!cancelled) {
          setData(null);
        }
      });
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

  return (
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
});

export default IconCloud;
