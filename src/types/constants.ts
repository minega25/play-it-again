import { z } from 'zod';
export const COMP_NAME = 'CountDown';

export const CompositionProps = z.object({
  duration: z.number(),
  backgroundImage: z.string(),
});

export const defaultCounterDurationInMinutes: z.infer<typeof CompositionProps> =
  {
    duration: 15,
    backgroundImage: '/easter.png',
  };

export const DURATION_IN_FRAMES = 18000;
export const VIDEO_WIDTH = 1920;
export const VIDEO_HEIGHT = 1080;
export const VIDEO_FPS = 30;
