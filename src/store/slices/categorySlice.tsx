import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import categoryList from '../../dataListTest/categoryList.json';

export const fetchCategory = createAsyncThunk('category/fetchCategory', async function () {
  // const response = await fetch('../../dataListTest/categoryList.json');
  // const data = await response.json();
  return categoryList;
});

// export const fetchCategory = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async (categoryId: string, thunkAPI) => {
//     const response = await categoryList.fetchById(categoryId)
//     return response.data
//   }
// )

interface categoryState {
  category: any;
  status?: 'idle' | 'pending' | 'succeeded' | 'failed';
  error?: string;
}

const initialState: categoryState = {
  category: [],
  status: 'idle',
};

export const categorySlice = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state, action) => {
      state.status = 'pending';
      state.error = undefined;
    });

    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.category = action.payload;
    });

    builder.addCase(fetchCategory.rejected, (state, action) => {
      state.status = 'succeeded';
      state.error = action.payload as string;
    });
  },
});

export default categorySlice.reducer;
