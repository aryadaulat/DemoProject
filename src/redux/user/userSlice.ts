import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  uid: string | null;
  email: string | null;
  fcmToken: string | null;
  [key: string]: any;
}

const initialState: UserState = {
  uid: null,
  email: null,
  fcmToken: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<UserState>) {
      return { ...state, ...action.payload };
    },
    clearUserData() {
      return initialState;
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;
