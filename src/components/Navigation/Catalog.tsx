import React, { FC } from 'react';
import styled from 'styled-components';

interface CatalogProps {
  setOpenCatalog: () => void;
}

const CatalogStyled = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  font-size: 14px;
  color: black;
  transition: all 0.3s linear;
  &:hover {
    color: #5f6368;
  }
`;

export const Catalog: FC<CatalogProps> = (props) => {
  return <CatalogStyled onClick={props.setOpenCatalog}>Catalog</CatalogStyled>;
};
