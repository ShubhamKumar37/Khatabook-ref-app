import { FaPhone } from "react-icons/fa6";

export default function RightNavLoan() {

    return (
        <div className="flex items-baseline gap-[1rem]">
            <p>For any loan related assistance, call on</p>

            <div>
                <a href="tel:8069900155"className="flex p-2 px-3 gap-1 items-baseline rounded-lg bg-[#FAE2E4]">
                    <FaPhone className="text-[#F16B70] text-sm" />
                    <p>8069900155</p>
                </a>
            </div>
        </div >
    );
}