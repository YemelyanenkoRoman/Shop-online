import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import goodsList from '../../dataListTest/goodsList.json';

export const getGoods = createAsyncThunk('goods/getGoods', async function (id: string) {
  // const response = await fetch('../../dataListTest/categoryList.json');
  // const data = await response.json();
  console.log(id);
  if (id === 'bookshalfs') {
    return goodsList;
  }
  return [];
});
interface goodsState {
  goods: any;
}

const initialState: goodsState = {
  goods: [],
};

export const goodsSlice = createSlice({
  name: 'goods',
  initialState: initialState,
  reducers: {
    setChangeToLowerPrice(state, action) {
      console.log(state.goods, 'sort to lower price');
      // state.goods = action.payload;
      const down = state.goods.sort((a: any, b: any) => b.price - a.price);
      console.log(action.payload);
    },

    setChangeToHigherPrice(state, action) {
      console.log(state.goods, 'sort to lower price');
      // state.goods = action.payload;
      const down = state.goods.sort((a: any, b: any) => a.price - b.price);
      console.log(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getGoods.pending, (state, action) => {
      // state.status = 'pending';
      // state.error = undefined;
    });

    builder.addCase(getGoods.fulfilled, (state, action) => {
      // state.status = 'succeeded';
      state.goods = action.payload;
    });

    builder.addCase(getGoods.rejected, (state, action) => {
      // state.status = 'succeeded';
      // state.error = action.payload as string;
    });
  },
});

export const { setChangeToLowerPrice, setChangeToHigherPrice } = goodsSlice.actions;
export default goodsSlice.reducer;
