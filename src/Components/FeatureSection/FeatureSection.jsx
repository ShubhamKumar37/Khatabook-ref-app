import { featureSVG1, featureSVG2, featureSVG3 } from "../../Data/Logo";
import FeatureCards from "./FeatureCards";
import { FaCalendarAlt } from "react-icons/fa";
import { CiCloudRainbow } from "react-icons/ci";
import { FaChartBar } from "react-icons/fa";
import MoreFeatureCards from "./MoreFeatureCards";

export default function FeatureSection() {
    const cardsData = [
        {
            heading: "GST & Non-GST Bills",
            desc: "Create customised invoices & easily share with customers",
            points: [
                "Custom fields like Vehicle No, PO No etc.",
                "Detailed sales and purchase reports",
                "No double-entry across khata and cashbook",
            ],
            svg: featureSVG1 // Corrected svg property
        },
        {
            heading: "Inventory Management",
            desc: "Track your stock in/out and profits",
            points: [
                "Detailed stock history with sale & purchase price with notes",
                "Low stock tracking",
                "Profit tracking at daily, weekly and monthly level",
            ],
            svg: featureSVG2 // Corrected svg property
        },
        {
            heading: "Business management on the go",
            desc: "Use Khatabook across different devices",
            points: [
                "Data synced across mobile and desktop devices",
                "Use Khatabook in both online and offline mode (Coming Soon)",
            ],
            svg: featureSVG3 // Corrected svg property
        },
    ];

    const moreFeatureCardData = [
        {
            heading: "Manage Multiple Businesses",
            desc: "Manage multiple businesses from the same account",
            icon: <FaCalendarAlt />
        },
        {
            heading: "Automatic Backup",
            desc: "Your data is automatically backed up when connected to internet in a secured way.",
            icon: <CiCloudRainbow />
        },
        {
            heading: "GST & Business Reports",
            desc: "Get all GST reports & other insights to run your business efficiently.",
            icon: <FaChartBar />
        },
    ];

    return (
        <div className="max-w-[1080px] mx-auto relative flex flex-col mt-[4rem]">
            <div className="flex flex-col gap-[4rem] items-center">
                <h3 className="font-bold text-red-400">POWERFUL FEATURES TO HELP YOU</h3>
                <h1 className="text-center font-bold text-6xl">Built with features for<br /> growing businesses</h1>
            </div>

            {/* Feature Cards */}
            <div className="flex flex-col gap-7">
                {cardsData.map((item, index) => (
                    <FeatureCards key={index} heading={item.heading} desc={item.desc} svg={item.svg} points={item.points} />
                ))}
            </div>

            {/* More Feature */}
            <div className="border border-gray-700 flex flex-col p-5 mt-[5rem] rounded-xl">
                <h1 className="text-center font-bold text-xl opacity-80">AND THAT’S NOT ALL...</h1>

                <div className="my-3 flex gap-[2rem]">
                    {moreFeatureCardData.map((item, index) => (
                        <MoreFeatureCards key={index} heading={item.heading} desc={item.desc} icon={item.icon} />
                    ))}
                </div>
            </div>
        </div>
    );
}
