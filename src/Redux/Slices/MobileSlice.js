import { createSlice } from '@reduxjs/toolkit';

export const MobileSlice = createSlice({
  name: "Mobile",
  initialState: '',
  reducers: {
    setMobile: (state, action) => action.payload,
  }
});

export const { setMobile } = MobileSlice.actions;

export default MobileSlice.reducer;
