import { configureStore, combineReducers } from '@reduxjs/toolkit';
import goodsSlice from './slices/goodsSlice';
import categorySlice from './slices/categorySlice';
import shoppingCartSlice from './slices/shoppingCartSlice';

const rootReducer = combineReducers({
  goods: goodsSlice,
  category: categorySlice,
  shoppingCart: shoppingCartSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
