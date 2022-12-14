import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';

interface StyledBurgerProps {
  open: boolean;
}

const StyledBurger = styled.div<StyledBurgerProps>`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 15px;
  right: 15px;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => (props.open ? 'black' : 'red')};
    transform-origin: 1px;
    transition: all 0.3s linear;
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

export const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Navbar open={open} />
    </>
  );
};
