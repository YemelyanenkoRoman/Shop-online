import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export const ShoppingCartList = () => {
  const state = useAppSelector((state) => state.shoppingCart.value);

  return (
    <div>
      {state.map((item: string) => {
        return <li>{item}</li>;
      })}
    </div>
  );
};
