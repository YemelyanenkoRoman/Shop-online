import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavListT } from '../../types/types';
import { Navlink } from '../Router';

interface NavigationProps {
  items: NavListT[];
}

const ListLinks = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  font-size: 14px;
`;

export const Navigation: FC<NavigationProps> = ({ items }) => {
  return (
    <ListLinks>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Navlink to={item.link}>{item.value}</Navlink>
          </li>
        );
      })}
    </ListLinks>
  );
};
