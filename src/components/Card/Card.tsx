'use client';
import React from 'react';
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from '../ui/glowing-stars';

interface GlowingStarsBackgroundCardPreviewProps {
  title: string;
  description: string;
  href: string;
}

export default function GlowingStarsBackgroundCardPreview({
  title,
  description,
  href,
}: GlowingStarsBackgroundCardPreviewProps) {
  return (
    <div className="flex py-20 antialiased min-w-64">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>{title}</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>{description}</GlowingStarsDescription>
          <div
            className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center cursor-pointer hover:bg-[hsla(0,0%,100%,.2)] transition-colors duration-200 ease-in-out"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = href;
            }}
          >
            <Icon />
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#4b0261"
      className="h-4 w-4 text-black stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#4b0261"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
