"use client";
import React from "react";
import Link from 'next/link'
import { SparklesCore } from "./ui/sparkles";

export const SparklesPreview = React.memo(function SparklesPreview() {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
        Let's Connect
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={400}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div className="font-bold text-white text-xl text-center">
        <Link
          href="mailto:lourdrivera123@gmail.com"
          className="block group-hover/product:shadow-2xl text-white"
          target="_blank"
          rel="noopener noreferrer">
           📧 Email Me: lourdrivera123@gmail.com
          </Link>
        <Link
          href="https://linkedin.com/in/zemiel-asma"
          className="block group-hover/product:shadow-2xl text-white"
          target="_blank"
          rel="noopener noreferrer">
           💼 linkedin.com/in/zemiel-asma
          </Link>
        <Link
          href="https://calendly.com/zemiel"
          className="block group-hover/product:shadow-2xl text-white"
          target="_blank"
          rel="noopener noreferrer">
           📅 Schedule a call: calendly.com/zemiel
        </Link>
      </div>
    </div>
  );
});
