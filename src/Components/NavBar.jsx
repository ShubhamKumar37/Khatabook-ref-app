import { useLocation } from "react-router-dom";
import { Logo } from "../Data/Logo";
import RightNavHome from "./RightNavHome";
import RightNavLoan from "./RightNavLoan";

export default function Navbar() {
    
    const location = useLocation();
    
    return (
        <div className="w-full relative bg-[#FDF2F3]">
            {/* Main navigation bar */}
            <nav className="max-w-[1200px] relative mx-auto flex  justify-between items-baseline p-5">
                {/* Left section of navbar */}
                <div className="my-auto">
                    {Logo}
                </div>

                {/* Right section of navbar */}
                {
                    location.pathname === "/" ? <RightNavHome /> : <RightNavLoan />
                }
            </nav>
        </div>
    );
}