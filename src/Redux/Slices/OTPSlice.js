import { createSlice } from '@reduxjs/toolkit';

export const OTPSlice = createSlice({
    name: 'OTP',
    initialState: {
        value: '',
        correctOTP: false,
    },
    reducers: {
        generateOTP: (state, action) => {
            const mobileNumber = action.payload;
            const contactPattern = /^[0-9]{10}$/;

            if (!contactPattern.test(mobileNumber)) {
                alert("Please enter a valid mobile number");
            } else {
                let otp = 0;
                const min = 100000;
                const max = 999999;
                otp = Math.floor(Math.random() * (max - min + 1) + min);

                state.value = otp;
                // console.log("Updated OTP List: ", state.value.forEach((item) => console.log("Hello ->", item)));
                alert("OTP is available on your console use ctrl+shift+i to open inspect element then click on console -> use the most recent or the bottom one");
                console.log("Here is your OTP, enter it: ", otp);

            }
        },
        checkOTP: (state, action) => {
            const enteredOTP = action.payload;
            console.log("Entered OTP", typeof enteredOTP, enteredOTP);
            console.log("Correct OTP", typeof state.value, state.value);
            if (state.value.toString() === enteredOTP) {
                state.correctOTP = true;
                state.value = '';
                // console.log(true);
            }
            else {
                state.correctOTP = false;
                // console.log(false);
            }
        }
    },
});

export const { generateOTP, checkOTP } = OTPSlice.actions;

export default OTPSlice.reducer;
