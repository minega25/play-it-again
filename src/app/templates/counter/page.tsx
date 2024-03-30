'use client';

import { Player } from '@remotion/player';
import type { NextPage } from 'next';
import { useState, useMemo } from 'react';
import { z } from 'zod';
import { RenderControls } from '../../../components/RenderControls';
import Main from '../../../remotion/CountDown/Main';
import {
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
  defaultCounterDurationInMinutes,
  CompositionProps,
} from '../../../types/constants';

const container: React.CSSProperties = {
  maxWidth: 1000,
  margin: 'auto',
  marginBottom: '2rem',
};

const outer: React.CSSProperties = {
  borderRadius: 'var(--geist-border-radius)',
  overflow: 'hidden',
  boxShadow: '0 0 200px rgba(0, 0, 0, 0.15)',
  marginBottom: 40,
};

const player: React.CSSProperties = {
  width: '100%',
};

const Home: NextPage = () => {
  const [duration, setDuration] = useState<number>(
    defaultCounterDurationInMinutes.duration
  );
  const [backgroundImage, setBackgroundImage] = useState<string>(
    defaultCounterDurationInMinutes.backgroundImage
  );

  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      duration: duration,
      backgroundImage: backgroundImage,
    };
  }, [duration, backgroundImage]);

  return (
    <div>
      <div style={container}>
        <div className="cinematics" style={outer}>
          {duration > 0 && (
            <Player
              component={Main}
              inputProps={inputProps}
              durationInFrames={duration * VIDEO_FPS * 60}
              fps={VIDEO_FPS}
              compositionHeight={VIDEO_HEIGHT}
              compositionWidth={VIDEO_WIDTH}
              style={player}
              controls
              autoPlay
              loop
            />
          )}
        </div>
        <RenderControls
          setBackgroundImage={setBackgroundImage}
          setDuration={setDuration}
          inputProps={inputProps}
        ></RenderControls>
      </div>
    </div>
  );
};

export default Home;
