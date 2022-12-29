import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Category } from '../../components/Category/Category';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCategory } from '../../store/slices/categorySlice';
import { getGoods } from '../../store/slices/goodsSlice';

export const CategoryList = () => {
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.category.category);

  const error = useAppSelector((state) => state.category.error);
  const loading = useAppSelector((state) => state.category.status === 'pending');

  const params = useParams();
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  useEffect(() => {
    if (params.id) {
      console.log(params.id);
      dispatch(getGoods(params.id));
    }
  }, [params.id]);

  return (
    <>
      {category.map((item: any) => {
        return <Category key={item.id} name={item.name} id={item.id} />;
      })}
    </>
  );
};
