import { createSlice } from '@reduxjs/toolkit';

export const OTPInputSlice = createSlice({
  name: "OTPInput",
  initialState: '',
  reducers: {
    setOTP: (state, action) => action.payload,
  }
});

export const { setOTP } = OTPInputSlice.actions;

export default OTPInputSlice.reducer;
