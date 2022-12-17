import React, { FC } from 'react';
import styled from 'styled-components';

interface BurgerProps {
  open: boolean;
  setStateOpen: () => void;
}

interface BurgerStyledProps {
  open: boolean;
}

const BurgerStyled = styled.div<BurgerStyledProps>`
  width: 2rem;
  height: 2rem;
  top: 15px;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #000;
    transform-origin: 1px;
    transition: all 0.2s linear;
    z-index: 1000;

    &:nth-child(1) {
      transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${(props) => (props.open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${(props) => (props.open ? '0' : '1')};
    }

    &:nth-child(3) {
      transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const Burger: FC<BurgerProps> = (props) => {
  return (
    <BurgerStyled open={props.open} onClick={props.setStateOpen}>
      <div />
      <div />
      <div />
    </BurgerStyled>
  );
};
