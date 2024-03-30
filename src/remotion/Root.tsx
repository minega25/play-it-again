import { AbsoluteFill, Composition, Img, staticFile } from 'remotion';
import Main from './CountDown/Main';
import {
  COMP_NAME,
  defaultCounterDurationInMinutes,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from '../types/constants';
import Background from './CountDown/Background';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id={COMP_NAME}
      component={Main}
      durationInFrames={DURATION_IN_FRAMES}
      fps={VIDEO_FPS}
      width={VIDEO_WIDTH}
      height={VIDEO_HEIGHT}
      defaultProps={defaultCounterDurationInMinutes}
    />
  );
};
