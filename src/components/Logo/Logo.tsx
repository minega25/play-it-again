import React from 'react';
import styled from 'styled-components';

import { WEIGHTS } from '../../constants';
import { SparklesCore } from '../ui/sparkles';

const Logo = () => {
  return (
    <Link href="/">
      <Wrapper>
        Play It Again <SparklesCore className="-mt-8" />
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
  background: linear-gradient(45deg, #4b0261, #58008f5f);
  -webkit-background-clip: text;
  color: transparent; /* Chrome, Safari */
  background-clip: text; /* Firefox */
`;

export default Logo;
