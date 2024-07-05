import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { generateOTP } from "../../Redux/Slices/OTPSlice";
import { setMobile } from "../../Redux/Slices/MobileSlice";
import { setOTP } from "../../Redux/Slices/OTPInputSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OTPValidation() {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const mobileNumber = useSelector((state) => state.Mobile);
    const enteredOTP = useSelector((state) => state.OTPInput)
    let correctOTP = useSelector((state) => state.OTP.value);
    const [flag, setFlag] = useState(false);

    const handleMobileChange = (event) => {
        dispatch(setMobile(event.target.value));
    };

    const handleOTPChange = (event) => {
        dispatch(setOTP(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFlag(true);
        dispatch(generateOTP(mobileNumber));
    };

    const checkOTP = () => {

        correctOTP = correctOTP.toString();
        if (enteredOTP ===  correctOTP) {
            return true;
        }
        else {
            return false;
        }
    }

    const handleOTP = (event) => {
        event.preventDefault();
        
        if (checkOTP()) {
            alert("Your OTP is verified and now you are redirecting to home page again");
            setFlag(false);
            Navigate('/');
        }
        else {
            alert("Your OTP is not correct");
        }
    }

    return (
        <div className="bg-white my-auto p-7 px-9 rounded-lg shadow-md">
            {
                flag === false ? (<div className="flex flex-col gap-[1rem]">
                    <h1>Enter your mobile number to get OTP</h1>

                    <form onSubmit={handleSubmit}>
                        <label>
                            Mobile number
                            <input
                                type="tel"
                                placeholder="Enter Mobile no."
                                onChange={handleMobileChange}
                                value={mobileNumber}
                                name="mobileNumber"
                                className="border border-black p-1 rounded-lg"
                                required
                            />
                        </label>
                        <br />
                        <button type="submit" className="bg-gray-200 mt-4 w-full py-3 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300">Send OTP</button>
                    </form>
                </div>
                ) : (
                    <div className="flex flex-col gap-[1rem]">
                        <h1>Enter verification code</h1>

                        <form onSubmit={handleOTP}>
                            <label>
                                Enter 6-digit code sent to your phone number +91 {mobileNumber}
                                <input
                                    type="number"
                                    placeholder="Enter your OTP"
                                    onChange={handleOTPChange}
                                    value={enteredOTP}
                                    name="otpValue"
                                    className="border border-black p-1 rounded-lg"
                                    required
                                />
                            </label>
                            <br />
                            <button type="submit" className="bg-gray-200 mt-4 w-full py-3 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300">Continue</button>
                        </form>
                    </div>
                )
            }


        </div>
    );
}
