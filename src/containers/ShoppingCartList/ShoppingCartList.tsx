import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export const ShoppingCartList = () => {
  const stateIdGoods = useAppSelector((state) => state.shoppingCart.value);
  const stateGoods = useAppSelector((state) => state.goods);

  const showGoods: any = [];

  stateIdGoods.forEach((idGood: string) => {
    stateGoods.goods.forEach((objGood: any) => {
      if (idGood == objGood.id) {
        // showGoods.push(objGood);
        showGoods.push(objGood);
      }
    });
  });

  return (
    <>
      <ul>
        {showGoods.map((obj: any) => {
          return (
            <li>
              <div>{obj.name}</div>
              <div>{obj.price}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
