import React from 'react';
import { CategoryList } from '../containers/CategoryList/CategoryList';

import { GoodsList } from '../containers/GoodsList/GoodsList';

export const Main = () => {
  return (
    <>
      <h2> Main </h2>
      <CategoryList />
      <GoodsList />
    </>
  );
};
