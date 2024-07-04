import { configureStore } from '@reduxjs/toolkit';
import otpReducer from './Slices/OTPSlice';
import mobileReducer from './Slices/MobileSlice';
import popupReducer from './Slices/PopupSlice';

export default configureStore({
  reducer: {
    OTP: otpReducer,
    Mobile: mobileReducer,
    Popup: popupReducer,
  },
});
