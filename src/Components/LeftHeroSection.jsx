import { useSelector, useDispatch } from "react-redux";
import { setMobile } from "../Redux/Slices/MobileSlice";
import { setPopup } from "../Redux/Slices/PopupSlice";

export default function LeftHeroSection()
{
    const dispatch = useDispatch();
    const mobileNumber = useSelector((state) => state.Mobile);

    const handleMobileChange = (event) => {
        dispatch(setMobile(event.target.value));
    };

    function clickHandler()
    {
        dispatch(setPopup());
    }
    function submitHandler(event)
    {
        event.preventDefault();
        clickHandler();
    }

    const leftHeroSectionData = ["Sales and purchase accounting", "GST/Non-GST bill creation", "Stock management with profit tracking"];

    return (
        <div className="relative flex flex-col gap-5">
            <h1 className="text-5xl">Business hua ^<span className="absolute top-[-1rem] text-2xl  rotate-[-20deg]">(aur bhi)</span> easy <br/>with Khatabook on Desktop </h1>

            <div className="flex bg-white mx-auto p-2 w-[30rem] rounded-lg">
                <form onSubmit={submitHandler} className="flex gap-[4rem] items-baseline">
                        <label>
                            <span>91+</span>
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
                        <button type="submit" className="bg-gray-200 mt-4 py-3 p-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300">Send OTP</button>
                    </form>

            </div>

            <div className="flex flex-col relative gap-[2rem]">
                <div>
                    <h1 className="font-bold text-4xl">Billing & Accounting for all businesses</h1>
                </div>
                <div className="flex relative gap-[1rem] opacity-85">
                    {
                        leftHeroSectionData.map((item, index) =>
                        {
                            return (<p key={index}>{item}</p>)
                        })
                    }
                </div>
            </div>

            <div className="flex relative gap-2 bg-[#FFF3C4] p-2 rounded-lg items-center">
                <div className="text-sm">
                    Try Khatabook Desktop on a sample DEMO account . No signup required.
                </div>

                <div>
                    <button onClick={clickHandler} className="mt-4 p-1 rounded-lg bg-[#0E1725] text-white px-2 text-sm">View Demo Account</button>
                </div>
            </div>
        </div>
    );
}