// Умный компонент

import { render } from '@testing-library/react';
import { useEffect } from 'react';
import { Goods } from '../../components/Goods/Goods';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setChangeToLowerPrice, setChangeToHigherPrice } from '../../store/slices/goodsSlice';
import { setIncrement } from '../../store/slices/shoppingCartSlice';

export const GoodsList = () => {
  const dispatch = useAppDispatch();
  const goods = useAppSelector((state) => state.goods.goods);
  console.log(goods);

  const clickHandler = (event: any) => {
    event.preventDefault();
    // console.log(event.target.classList[0]);
    if (event.target.classList[0] === 'add') {
      dispatch(setIncrement(event.target.getAttribute('id')));
    }
  };

  return (
    <>
      {goods.length >= 1 ? (
        <>
          <button onClick={() => dispatch(setChangeToLowerPrice([]))}>From Higher Price</button>
          <button onClick={() => dispatch(setChangeToHigherPrice([]))}>From Lower Price</button>
        </>
      ) : (
        <></>
      )}
      <div onClick={(event) => clickHandler(event)}>
        {goods.map((item: any) => {
          return (
            <Goods key={item.id} name={item.name} id={item.id} price={item.price} description={item.description} />
          );
        })}
      </div>
    </>
  );
};
