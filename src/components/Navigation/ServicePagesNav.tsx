import React, { FC } from 'react';
import { Navigation } from './Navigation';
import { navList } from './navList';
import styled from 'styled-components';

interface ServicePagesProps {
  open: boolean;
}

interface ServiceNavProps {
  open: boolean;
}

const ServiceNav = styled.nav<ServiceNavProps>`
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
    justify-content: flex-start;
    flex-direction: column;
    position: fixed;
    transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;

    .navigation {
      flex-direction: column-reverse;
    }

    ul {
      flex-direction: column;
    }
  }
`;

export const ServicePagesNav: FC<ServicePagesProps> = (props) => {
  return (
    <ServiceNav open={props.open}>
      <Navigation items={navList} />
    </ServiceNav>
  );
};
