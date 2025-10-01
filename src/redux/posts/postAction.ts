import { createAsyncThunk } from '@reduxjs/toolkit';

export const getDataPosts = createAsyncThunk(
  'posts/fetchgetDataPosts',
  // if you type your function argument here
  async () => {
    try {
      console.log('masuk getDataPosts');
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const data = await response.json();
      console.log('data getDataPosts', data);
      if (response.status !== 200) {
        return {
          data: [],
          error: `Error ${response.status}: ${response.statusText}`,
        };
      }

      return {
        data,
        error: data.error,
      };
    } catch (error) {
      console.error('Error fetching posts:', error);
      console.log('error getDataPosts', error);
      return {
        data: [],
        error: 'Failed to fetch posts',
      };
    }
  },
);
