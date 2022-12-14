import React, { FC } from 'react';
import { Navigation } from './Navigation';
import { navList } from './navList';
import styled from 'styled-components';
import { serviceList } from './serviceList';

interface NavbarProps {
  open: boolean;
}

interface NavProps {
  open: boolean;
}

const Nav = styled.nav<NavProps>`
  height: 65px;
  border-bottom: 2px solid #000;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.open ? 'flex-start' : 'space-between')};

  ul {
    display: flex;
    flex-direction: row;
  }

  li {
    padding: 0 10px;
  }

  .navigation {
    display: flex;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    background-color: blue;

    .navigation {
      flex-direction: column-reverse;
    }

    ul {
      flex-direction: column;
    }
  }
`;

export const Navbar: FC<NavbarProps> = (props) => {
  return (
    <Nav open={props.open}>
      <div className="logo">NAV BAR</div>
      <div className="navigation">
        <Navigation items={navList} />
        <Navigation items={serviceList} />
      </div>
    </Nav>
  );
};
