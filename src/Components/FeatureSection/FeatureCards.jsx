import { FaCheck } from "react-icons/fa";

export default function FeatureCards({ heading, desc, points, svg }) {
    return (
        <div className="flex relative justify-between p-[2rem] bg-[#F6F7F9] rounded-lg">
            <div>
                <h1 className="text-2xl">{heading}</h1>
                <p className="text-lg opacity-90">{desc}</p>
                <ul className="flex flex-col gap-5 mt-3">
                    {points.map((item, index) => (
                        <li key={index} className="text-lg opacity-90 flex gap-1 items-center">
                            <FaCheck className="text-red-700" /> {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div>{svg}</div>
        </div>
    );
}
