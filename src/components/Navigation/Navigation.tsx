import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { NavListT } from '../../types/types';

interface NavigationProps {
  items: NavListT[];
}

const ListLinks = styled.ul`
  list-style: none;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

const Navlink = styled(NavLink)`
  text-decoration: none;
  color: black;

  svg {
    transition: all 0.3s linear;
    &:hover {
      fill: #5f6368;
    }
  }
`;

export const Navigation: FC<NavigationProps> = ({ items }) => {
  return (
    <ListLinks>
      {items.map((item) => {
        return (
          <li key={item.value}>
            <Navlink to={item.link}>{item.value}</Navlink>
          </li>
        );
      })}
    </ListLinks>
  );
};
