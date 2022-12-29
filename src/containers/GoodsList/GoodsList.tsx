// Умный компонент

import { useEffect } from 'react';
import { Goods } from '../../components/Goods/Goods';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setChange } from '../../store/slices/goodsSlice';

export const GoodsList = () => {
  const dispatch = useAppDispatch();
  const goods = useAppSelector((state) => state.goods.goods);

  // function showArr() {
  //   return goods.map((item: any) => {
  //     return item;
  //   });
  // }

  // useEffect(function sort() {
  //   return console.log(showArr().sort((a: any, b: any) => b.id - a.id));
  // });

  // useEffect(() => {
  //   console.log(showArr());
  // });

  // dispatch(setChange([]));

  return (
    <>
      <button onClick={() => dispatch(setChange(['abc']))}>down</button>
      {goods.map((item: any) => {
        return <Goods key={item.id} name={item.name} id={item.id} />;
      })}
    </>
  );
};
