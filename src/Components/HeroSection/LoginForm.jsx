import { IoIosCloseCircleOutline } from "react-icons/io";
import { Logo } from "../../Data/Logo";
import { useSelector, useDispatch } from "react-redux";
import { generateOTP } from "../../Redux/Slices/OTPSlice";
import { setMobile } from "../../Redux/Slices/MobileSlice";
import { setPopup } from "../../Redux/Slices/PopupSlice";

export default function LoginForm() {

    const dispatch = useDispatch();
    const mobileNumber = useSelector((state) => state.Mobile);

    const handleMobileChange = (event) => {
        dispatch(setMobile(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(generateOTP(mobileNumber));
        dispatch(setPopup());
    };

    const crossHandler = () =>
        {
            dispatch(setPopup());
        }

    return (
        <div className="flex flex-col gap-4">
            <button onClick={crossHandler} className="flex justify-end text-xl"> <IoIosCloseCircleOutline /></button>

            <div>{Logo}</div>

            <h1 className="font-bold">Welcome to Khatabook</h1>

            <form onSubmit={handleSubmit} >
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
            </form>

            <div className="text-center">
                By proceeding, you agree to our
                <a href="https://khatabook.com/terms"  className="underline">
                    Terms of Use
                </a> and <br/>
                <a href="https://khatabook.com/privacy" className="underline">Privacy Policy</a>
            </div>
        </div>
    );
}