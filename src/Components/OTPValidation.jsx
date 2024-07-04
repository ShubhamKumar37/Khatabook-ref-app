import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { generateOTP } from "../Redux/Slices/OTPSlice";
import { setMobile } from "../Redux/Slices/MobileSlice";

export default function OTPValidation() {
    const dispatch = useDispatch();
    const mobileNumber = useSelector((state) => state.Mobile);

    const handleMobileChange = (event) => {
        dispatch(setMobile(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(generateOTP(mobileNumber));
    };

    return (
        <div className="bg-white my-auto p-7 px-9 rounded-lg shadow-md">
            <div className="flex flex-col gap-[1rem]">
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
                    <br/>
                    <button type="submit" className="bg-gray-200 mt-4 w-full py-3 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300">Send OTP</button>
                </form>
            </div>
        </div>
    );
}
