import LeftHeroSection from "./LeftHeroSection";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import { bookLogo, bizLogo } from "../Data/Logo";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa6";


export default function HeroSection() {

    const flag = useSelector((State) => State.Popup.value);

    return (
        <div className=" bg-[#FDF2F3] relative">

            <div className=" relative max-w-[1000px] mx-auto py-[5rem] bg-[#FDF2F3] flex gap-[2rem]">

                {/* Login window popups */}
                {
                    flag ? (<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
                        <div className="bg-white p-6 rounded-md shadow-lg z-60">
                            <LoginForm />
                        </div>
                    </div>) : null
                }

                {/* Left Section */}
                <div className="w-[50rem]"><LeftHeroSection></LeftHeroSection></div>


                {/* Right Section */}
                <div className="relative flex left-[10rem] bottom-[-5rem] w-[50rem]">
                    <img src="https://khatabook-assets.s3.ap-south-1.amazonaws.com/kb-pwa/top-right-desktop-img-bed1eb2ec0.webp" width={800} className="object-contain" alt="Image-Hero-Section"></img>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="relative max-w-[900px] mx-auto flex justify-between mt-[-5rem]">
                <div className="flex gap-[3rem] bg-white h-full p-7 rounded-lg">
                    <div>{bookLogo}</div>
                    <div className="flex flex-col gap-4">
                        <div>
                            <h1 className="font-bold">3 Cr+ Businesses using our free apps</h1>
                            <p>Access your account anywhere, anytime.</p>

                        </div>
                        <div className="flex justify-end gap-[1rem]">
                            <a href="https://play.google.com/store/games?hl=en_US"className="flex"><FaGooglePlay />  Play Store</a>
                            <a href="https://www.apple.com/app-store/" className="flex"><FaAppStore />  App Store</a>
                        </div>

                    </div>
                </div>

                <div className="flex gap-[3rem] bg-white h-full p-5 rounded-lg">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold">Already use Tally? *</h1>
                        <p>Get Tally * on mobile with BizAnalyst</p>
                        <a href="https://bizanalyst.in/?referrer=singular_click_id%3D79d6f21d-50ca-4854-8f67-d67df893b89d" className="text-blue-600">Go To BizAnalyst</a>
                    </div>

                    <div>{bizLogo}</div>
                </div>
            </div>
        </div>
    );
}