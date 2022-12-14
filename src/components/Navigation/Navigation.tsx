import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { NavListT } from '../../types/types';

interface NavigationProps {
  items: NavListT[];
}

const ListLinks = styled.ul`
  list-style: none;
`;

const Navlink = styled(NavLink)`
  text-decoration: none;
  color: black;
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
