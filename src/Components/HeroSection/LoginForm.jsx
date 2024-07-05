import { IoIosCloseCircleOutline } from "react-icons/io";
import { Logo } from "../../Data/Logo";
import { useSelector, useDispatch } from "react-redux";
import { generateOTP } from "../../Redux/Slices/OTPSlice";
import { setMobile } from "../../Redux/Slices/MobileSlice";
import { setPopup } from "../../Redux/Slices/PopupSlice";
import { setOTP } from "../../Redux/Slices/OTPInputSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginForm() {

    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const mobileNumber = useSelector((state) => state.Mobile);
    const enteredOTP = useSelector((state) => state.OTPInput);
    let correctOTP = useSelector((state) => state.OTP.value);
    const [flag, setFlag] = useState(false);

    const handleMobileChange = (event) => {
        dispatch(setMobile(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(generateOTP(mobileNumber));
        setFlag(true);
    };
    
    const crossHandler = () => {
        dispatch(setPopup());
    }
    
    const handleOTPChange = (event) => {
        dispatch(setOTP(event.target.value));
    };
    
    const checkOTP = () => {
        
        correctOTP = correctOTP.toString();
        if (enteredOTP === correctOTP) {
            dispatch(setPopup());
            return true;
        }
        else {
            return false;
        }
    }

    const handleOTP = (event) => {
        event.preventDefault();

        if (checkOTP()) {
            alert("Your OTP is verified and now you are redirecting to home page again if you are already on that page then nothing will happen");
            setFlag(false);
            Navigate('/');
        }
        else {
            alert("Your OTP is not correct");
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <button onClick={crossHandler} className="flex justify-end text-xl"> <IoIosCloseCircleOutline /></button>

            <div>{Logo}</div>

            <h1 className="font-bold">Welcome to Khatabook</h1>

            {flag === false ? (<form onSubmit={handleSubmit} >
                <label>
                    Mobile number
                    <input
                        type="tel"
                        placeholder="Enter Mobile no."
                        onChange={handleMobileChange}
                        value={mobileNumber}
                        name="mobileNumber"
                        className="border border-black p-1 rounded-lg ml-4"
                        required
                    />
                </label>
                <br />
                <button type="submit" className="bg-gray-200 mt-4 w-full py-3 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300">Get OTP</button>
            </form>) : (<div className="flex flex-col gap-[1rem]">
                <h1>Enter verification code</h1>

                <form onSubmit={handleOTP}>
                    <label>
                        Enter 6-digit code sent to your phone number +91 {mobileNumber}
                        <br/>
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
            </div>)}



            <div className="text-center">
                By proceeding, you agree to our
                <a href="https://khatabook.com/terms" className="underline">
                    Terms of Use
                </a> and <br />
                <a href="https://khatabook.com/privacy" className="underline">Privacy Policy</a>
            </div>
        </div>
    );
}