import React, { FC } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Category } from '../../components/Category/Category';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCategory } from '../../store/slices/categorySlice';
import { getGoods } from '../../store/slices/goodsSlice';

const CategoryListStyle = styled.div`
  position: absolute;
  right: 0;
  top: 70px;
  width: 100%;
  background-color: #5f6368;
  padding: 20px 0;
`;

const CategoryUl = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
`;

export const CategoryList: FC = () => {
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
    <CategoryListStyle>
      <CategoryUl>
        {category.map((item: any) => {
          return <Category key={item.id} name={item.name} id={item.id} />;
        })}
      </CategoryUl>
    </CategoryListStyle>
  );
};
