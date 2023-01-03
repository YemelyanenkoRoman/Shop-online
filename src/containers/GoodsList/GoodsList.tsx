// Умный компонент

import { render } from '@testing-library/react';
import { useEffect } from 'react';
import { Goods } from '../../components/Goods/Goods';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setChangeToLowerPrice, setChangeToHigherPrice } from '../../store/slices/goodsSlice';

export const GoodsList = () => {
  const dispatch = useAppDispatch();
  const goods = useAppSelector((state) => state.goods.goods);
  console.log(goods);
  return (
    <>
      {goods.length >= 1 ? (
        <>
          <button onClick={() => dispatch(setChangeToLowerPrice([]))}>ToLowerPrice</button>
          <button onClick={() => dispatch(setChangeToHigherPrice([]))}>ToHigherPrice</button>
        </>
      ) : (
        <></>
      )}
      {goods.map((item: any) => {
        return <Goods key={item.id} name={item.name} id={item.id} />;
      })}
    </>
  );
};
