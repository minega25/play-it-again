import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';
import { loadFont } from '@remotion/google-fonts/Orbitron';
import Background from './Background';

const { fontFamily } = loadFont();

const Countdown = ({
  duration,
  backgroundImage,
}: {
  duration: number;
  backgroundImage: string;
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const totalTimeSeconds = duration * 60;
  const timePerFrame = totalTimeSeconds / durationInFrames;
  const currentTime = totalTimeSeconds - frame * timePerFrame;
  const hours = Math.floor(currentTime / 3600);
  const minutes = Math.floor((currentTime % 3600) / 60);
  const seconds = Math.floor(currentTime % 60);

  const paddedHours = String(hours).padStart(2, '0');
  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(seconds).padStart(2, '0');
  let displayTime = '';
  if (hours === 0) {
    displayTime = `${paddedMinutes}:${paddedSeconds}`;
  } else {
    displayTime = `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  }

  return (
    <AbsoluteFill>
      <AbsoluteFill>
        <Background imagePath={backgroundImage} />
      </AbsoluteFill>
      <AbsoluteFill style={{ backgroundColor: 'black', opacity: 0.4 }} />
      <AbsoluteFill>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20em',
            color: 'white',
            fontFamily,
            fontWeight: 'bold',
          }}
        >
          {displayTime}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default Countdown;
