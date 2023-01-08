import React from 'react';
import { CategoryList } from '../../containers/CategoryList/CategoryList';

import { GoodsList } from '../../containers/GoodsList/GoodsList';

export const GoodsCards = () => {
  return (
    <div style={{ marginTop: '70px' }}>
      <CategoryList />
      <GoodsList />
    </div>
  );
};
