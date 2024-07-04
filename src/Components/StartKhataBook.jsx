import { useSelector, useDispatch } from "react-redux";
import { setMobile } from "../Redux/Slices/MobileSlice";
import { setPopup } from "../Redux/Slices/PopupSlice";


export default function StartKhataBook() {

    const dispatch = useDispatch();
    const mobileNumber = useSelector((state) => state.Mobile);
    const leftHeroSectionData = ["Sales and purchase accounting", "GST/Non-GST bill creation", "Stock management with profit tracking"];

    const handleMobileChange = (event) => {
        dispatch(setMobile(event.target.value));
    };

    function clickHandler() {
        dispatch(setPopup());
    }
    function submitHandler(event) {
        event.preventDefault();
        clickHandler();
    }

    return (
        <div className="max-w-[900px] relative mx-auto mt-[5rem] bg-[#FDF2F3] rounded-lg p-5">
            <div className="flex gap-[3rem]">
                <div className="flex flex-col w-[46%] gap-4">
                    <h1 className="text-3xl font-semibold">Get started with Khatabook.</h1>
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
                            <button type="submit" className="bg-red-200 mt-4 py-3 p-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300">Getting Started</button>
                        </form>

                    </div>

                    <div className="flex relative gap-[1rem] opacity-85 text-sm">
                        {
                            leftHeroSectionData.map((item, index) => {
                                return (<p key={index}>{item}</p>)  
                            })
                        }
                    </div>

                </div>
                <div className="scale-110">
                    <img src="https://khatabook-assets.s3.ap-south-1.amazonaws.com/kb-pwa/kb-mockuo-d7ed5f5426.webp" alt="scan-the-qrcode"></img>
                </div>

                <div className="flex flex-col gap-3">
                    <img src="https://khatabook-assets.s3.ap-south-1.amazonaws.com/kb-pwa/qr-code-ee8e53172b.webp" alt="qr-code"></img>
                    <p className="text-center ">Scan to download <br /> the app</p>

                    <div className="flex flex-col gap-2">
                        <button className="bg-black text-white hover:bg-gray-500 p-1 rounded-lg transition-all duration-200">Get it on play store</button>
                        <button className="bg-black text-white hover:bg-gray-500 p-1 rounded-lg transition-all duration-200">Get it on app store</button>
                    </div>
                </div>
            </div>
            <div className="flex relative gap-2 bg-[#FFF3C4] p-2 rounded-lg items-center justify-center mt-4">
                <div className="text-sm">
                    Try Khatabook Desktop on a sample DEMO account . No signup required.
                </div>

                <div>
                    <button onClick={clickHandler} className=" p-2 rounded-lg bg-[#0E1725] text-white px-2 text-sm">View Demo Account</button>
                </div>
            </div>
        </div>
    );
}