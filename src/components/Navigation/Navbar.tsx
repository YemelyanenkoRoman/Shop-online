import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { CategoryList } from '../../containers/CategoryList/CategoryList';
import { Logo } from '../Logo';
import { Burger } from './Burger';
import { Catalog } from './Catalog';
import { Navigation } from './Navigation';
import { navList } from './navList';
import { serviceList } from './serviceList';
import { Fade } from '../Fade/Fade';

interface NavBarProps {
  open: boolean;
}

const StyledNavbar = styled.nav<NavBarProps>`
  max-width: 1200px;
  margin: 0 auto;

  height: 70px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  line-height: 20px;
  li {
    &:not(:last-child) {
      padding-right: 20px;
    }
  }

  .ServisePagesNav {
    //test style display flex
    display: flex;

    letter-spacing: 1px;
    li {
      padding-right: ${(props) => (props.open ? '0' : '70px')};
    }

    @media (max-width: 768px) {
      position: fixed;
      transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
      transition: all 0.2s linear;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;

      display: flex;
      justify-content: center;
      padding-top: 70px;
      text-transform: uppercase;

      ul {
        flex-direction: column;
      }

      li {
        padding-bottom: 20px;
      }
    }
  }
`;

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openCatalog, setOpenCatalog] = useState(false);

  return (
    <StyledNavbar open={open}>
      <Burger open={open} setStateOpen={() => setOpen(!open)} />
      <Logo />
      <div className="ServisePagesNav">
        <Navigation items={navList} setOpenCatalog={() => setOpenCatalog(false)} />
        <Catalog setOpenCatalog={() => setOpenCatalog(!openCatalog)} />
      </div>
      <Navigation items={serviceList} setOpenCatalog={() => setOpenCatalog(false)} />
      <Fade in={openCatalog}>
        <CategoryList />
      </Fade>
    </StyledNavbar>
  );
};
