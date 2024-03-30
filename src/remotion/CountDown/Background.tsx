import React from 'react';
import { Img, staticFile } from 'remotion';

const Background = ({ imagePath }: { imagePath: string }) => {
  return <Img src={staticFile(imagePath)} />;
};

export default Background;
