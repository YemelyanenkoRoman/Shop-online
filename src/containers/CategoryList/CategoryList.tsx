import { useEffect } from 'react';
import { Category } from '../../components/Category/Category';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCategory } from '../../store/slices/categorySlice';

export const CategoryList = () => {
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.category.category);
  const error = useAppSelector((state) => state.category.error);
  const loading = useAppSelector((state) => state.category.status === 'pending');

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  return (
    <>
      {category.map((item: any) => {
        return <Category key={item.id} name={item.name} id={item.id} />;
      })}
    </>
  );
};
