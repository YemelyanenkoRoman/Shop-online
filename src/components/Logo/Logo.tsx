import styled from 'styled-components';
import { Navlink } from '../Router/Link';

const Logotip = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Logo = () => {
  return (
    <Logotip>
      <Navlink to="/">Roman Mood</Navlink>
    </Logotip>
  );
};
