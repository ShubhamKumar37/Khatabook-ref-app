import { FaPhone } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { setPopup } from "../Redux/Slices/PopupSlice";
import { useDispatch } from "react-redux";

export default function RightNavHome() {

    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(setPopup());
    }

    return (
        <div className="flex gap-[1rem]">
            {/* phone number  */}
            <div className="flex p-2 px-3 gap-1 items-baseline rounded-lg bg-[#FAE2E4]">
                <FaPhone className="text-[#F16B70] text-sm" />
                <p>9606800800</p>
            </div>

            {/* business loan button */}
            <div className="relative flex ">
                <button className=" px-3 border border-red-600 rounded-lg">
                    <NavLink to="/loan-page">
                        <span className="absolute right-2 top-[-11px] text-sm text-white rounded-xl px-1 bg-red-600">New</span>
                        <span className="text-sm font-bold text-red-600 b">Business Loans</span>
                    </NavLink>
                </button>

            </div>

            {/* login button */}
            <div>
                <button onClick={clickHandler} className="p-2 px-3 shadow-md rounded-lg bg-white hover:bg-red-700 hover:text-white transition-all duration-300">Log In</button>
            </div>
        </div>
    );
}