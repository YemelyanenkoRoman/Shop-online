import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavListT } from '../../types/types';
import { Navlink } from '../Router';

interface NavigationProps {
  items: NavListT[];
  setOpenCatalog?: () => void;
}

const ListLinks = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  font-size: 14px;
`;

export const Navigation: FC<NavigationProps> = (props) => {
  return (
    <ListLinks>
      {props.items.map((item) => {
        return (
          <li key={item.id} onClick={props.setOpenCatalog}>
            <Navlink to={item.link}>{item.value}</Navlink>
          </li>
        );
      })}
    </ListLinks>
  );
};
