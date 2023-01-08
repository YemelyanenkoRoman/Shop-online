import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
interface CategoryProps {
  name: string;
  id: string | number;
}

const StuledButton = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  line-height: 20px;
  font-size: 14px;
  text-transform: capitalize;
  cursor: pointer;
  list-style: none;
  color: #fff;
  transition: all 0.3s linear;
  /* &:not(:last-child) {
    padding-right: 70px;
  } */
  padding-right: 70px;
  &:hover {
    color: #000;
  }
`;

export const Category = (props: CategoryProps) => {
  let navigate = useNavigate();
  const searchParams = () => {
    navigate(`/category/${props.id}`, { replace: true });
  };

  return (
    <StuledButton>
      <li key={props.id}>
        <div onClick={searchParams}>{props.name}</div>
      </li>
    </StuledButton>
  );
};
