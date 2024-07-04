import OTPValidation from "./OTPValidation";
import { CiDiscount1 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { IoMdDesktop } from "react-icons/io";
import { IoShieldHalf } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function BusinessPage() {
    const benefitsArray = [
        { icon: <CiDiscount1 />, text: "1.75-2% Rate of Interest" },
        { icon: <SlCalender />, text: "Flexible Repayment Options" },
        { icon: <IoMdDesktop />, text: "100% Online Process" },
        { icon: <IoShieldHalf />, text: "No Collateral" },
    ];

    return (
        <div className="bg-[#FDF2F3]">
            <div className="max-w-[1100px] mx-auto p-[5rem] flex gap-[3rem] justify-between">

                {/* Right section of loan page */}
                <div className="flex flex-col gap-5">
                    <h1 className="text-5xl font-bold italic">
                        Get business loan up to <span className="text-red-600">₹10 LAKHS</span>
                    </h1>

                    <p className="w-[80%] opacity-80x">
                        Grow your business with Khatabook’s fast loans and flexible repayment options
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        {benefitsArray.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                {item.icon}
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Left section of loan page */}

                <OTPValidation />
            </div>
            
            <div>
                <NavLink to="/">
                    <button className="m-2 p-2 bg-blue-500 rounded-lg text-white">Go back to home page</button>
                </NavLink>
            </div>
        </div>
    );
}
