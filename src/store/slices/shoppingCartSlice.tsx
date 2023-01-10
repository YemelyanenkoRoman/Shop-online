import React, { FC } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  value: string[];
}

export const initialState: Readonly<UserState> = {
  value: [],
};

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    setIncrement(state, action: PayloadAction<string>) {
      console.log(action.payload);
      state.value.push(action.payload);
    },
  },
});

export const { setIncrement } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
