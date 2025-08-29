'use client';

import React, { useState, useEffect } from 'react';

const ClientOnlySparkles = () => {
  const [SparklesComponent, setSparklesComponent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      import('../sparklesdemo').then((module) => {
        setSparklesComponent(() => module.SparklesPreview);
        setIsLoading(false);
      }).catch((error) => {
        console.error('Failed to load sparkles component:', error);
        setIsLoading(false);
      });
    }
  }, []);

  // Loading state
  if (isLoading || !SparklesComponent) {
    return (
      <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
          Let&apos;s Connect
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Loading placeholder */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-white/50 text-center animate-pulse">
              <div className="mb-2">✨</div>
              <div className="text-xs">Loading sparkles...</div>
            </div>
          </div>

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <div className="font-bold text-white text-xl text-center">
          <a
            href="mailto:lourdrivera123@gmail.com"
            className="block group-hover/product:shadow-2xl text-white">
             📧 Email Me: lourdrivera123@gmail.com
            </a>
          <a
            href="https://linkedin.com/in/zemiel-asma"
            className="block group-hover/product:shadow-2xl text-white">
             💼 linkedin.com/in/zemiel-asma
            </a>
          <a
            href="https://calendly.com/zemiel"
            className="block group-hover/product:shadow-2xl text-white">
             📅 Schedule a call: calendly.com/zemiel
            </a>
        </div>
      </div>
    );
  }

  // Render the actual component
  return <SparklesComponent />;
};

export default ClientOnlySparkles;
