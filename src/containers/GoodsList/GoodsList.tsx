// Умный компонент

import { Goods } from '../../components/Goods/Goods';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export const GoodsList = () => {
  const dispatch = useAppDispatch();
  const goods = useAppSelector((state) => state.goods.goods);

  return (
    <>
      {goods.map((item: any) => {
        return <Goods key={item.id} name={item.name} id={item.id} />;
      })}
    </>
  );
};
