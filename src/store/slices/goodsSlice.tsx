import { createSlice } from '@reduxjs/toolkit';

import goodsList from '../../dataListTest/goodsList.json';

interface goodsState {
  goods: any;
}

const initialState: goodsState = {
  goods: goodsList,
};

export const goodsSlice = createSlice({
  name: 'goods',
  initialState: initialState,
  reducers: {},
});

export default goodsSlice.reducer;
