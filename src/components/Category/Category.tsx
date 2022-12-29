import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
interface CategoryProps {
  name: string;
  id: string | number;
}

export const Category = (props: CategoryProps) => {
  let navigate = useNavigate();
  const searchParams = () => {
    navigate(`/category/${props.id}`, { replace: true });
  };

  return (
    <ul>
      <li key={props.id}>
        <button onClick={searchParams}>{props.name}</button>
        <p>id: {props.id}</p>
      </li>
    </ul>
  );
};
