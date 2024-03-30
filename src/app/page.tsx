'use client';
import type { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

import { BackgroundBeams } from '../components/ui/background-beams';
import Card from '../components/Card';

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-center font-bold text-black mt-32">
        Start Creating Amazing Videos Now
      </h1>
      <p></p>
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-lg text-center relative z-10 mt-4 leading-loose">
        Dive into video creation with ease. Choose from a variety of templates
        to create professional-looking videos in minutes. Whether it&lsquo;s for
        education, marketing, or personal stories, your stunning video starts
        here. Click below and let your creativity flow!
      </p>

      <TemplatesSection aria-label="templates-section">
        <h2>Templates</h2>

        <CardWrapper>
          <Card
            title="Count Down"
            description="Create count down videos"
            href="/templates/counter"
          />
          <Card
            title="Educational Videos"
            description="Create your own educational videos"
            href="/templates/education-content"
          />
          <Card
            title="Navigating Time Zones"
            description="Coming soon..."
            href="/templates/time-zones"
          />
        </CardWrapper>
      </TemplatesSection>
      <BackgroundBeams />
    </div>
  );
};

const TemplatesSection = styled.section`
  padding: 2rem 0;

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Home;
