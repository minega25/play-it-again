'use client';
import React from 'react';
import styled from 'styled-components';
import { Menubar, MenubarMenu, MenubarTrigger } from '../ui/menubar';

import { COLORS } from '../../constants';
import Logo from '../Logo';

const Header = () => {
  return (
    <MainHeader>
      <Side>
        <Logo />
      </Side>
      <Side>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Templates</MenubarTrigger>
            <MenubarTrigger>How it works</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </Side>
    </MainHeader>
  );
};

const MainHeader = styled.div`
  display: flex;
  padding: 16px 32px;
  /* border-bottom: 1px solid ${COLORS.gray[300]}; */
`;

const Side = styled.div`
  flex: 1;
`;

export default Header;
