import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from '..';
import { getDataPosts } from './postAction';

// Define a type for the Post
interface PostState {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Define a type for the posts slice state
interface PostsState {
  data: PostState[];
  loading: boolean;
  error: string | null;
}

// Define the initial state using that type
const initialState: PostsState = {
  data: [],
  loading: false,
  error: null,
};

export const postSlice = createSlice({
  name: 'post',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    resetData: state => {
      state.data = [];
      state.loading = false;
      state.error = null;
    },
    addPosts: (state, action: PayloadAction<PostState[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(getDataPosts.pending, state => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getDataPosts.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
      state.error = action.payload.error;
    });
    builder.addCase(getDataPosts.rejected, (state) => {
      // state.data = action.payload.data;
      state.loading = false;
      state.error = 'Failed to fetch posts rejected';
    });
  },
});

export const {addPosts,resetData} = postSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default postSlice.reducer;
