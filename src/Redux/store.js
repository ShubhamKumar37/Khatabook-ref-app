import { configureStore } from '@reduxjs/toolkit';
import otpReducer from './Slices/OTPSlice';
import mobileReducer from './Slices/MobileSlice';
import popupReducer from './Slices/PopupSlice';
import otpInputReducer from './Slices/OTPInputSlice';

export default configureStore({
  reducer: {
    OTP: otpReducer,
    Mobile: mobileReducer,
    Popup: popupReducer,
    OTPInput: otpInputReducer
  },
});
