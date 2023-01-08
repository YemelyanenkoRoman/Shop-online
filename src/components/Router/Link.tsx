import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navlink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: black;
  transition: all 0.3s linear;
  &:hover {
    color: #5f6368;
  }

  svg {
    transition: all 0.3s linear;
    &:hover {
      fill: #5f6368;
    }
  }
`;
