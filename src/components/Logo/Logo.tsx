import React from 'react';
import styled from 'styled-components';
import { Navlink } from '../Router/Link';
// import logo from '../../../public/images/png/logo.png';

const Logotip = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const StyledImage = styled.img`
  position: absolute;
  left: 93px;
  top: -30px;
  width: 58px;
  height: 58px;
`;

const StyledText = styled.div`
  position: relative;
  z-index: 100;
`;

export const Logo = () => {
  return (
    <Logotip>
      <Navlink to="/">
        <StyledText>Roman Mood</StyledText>
        <StyledImage src={process.env.PUBLIC_URL + '/images/png/logo.png'} />
      </Navlink>
    </Logotip>
  );
};
