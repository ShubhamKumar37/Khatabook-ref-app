import { Logo } from "../../Data/Logo";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const FooterSection = () => {
    const socialMediaButton = [
        "https://www.youtube.com/@Khatabook_official",
        "https://www.instagram.com/khata.book/?hl=en",
        "https://x.com/i/flow/login?redirect_after_login=%2FKhatabook",
        "https://x.com/i/flow/login?redirect_after_login=%2FKhatabook",
        "https://www.linkedin.com/company/khatabook/"
    ];

    const listData1 = [
        "About Us",
        "Careers",
        "Blog",
        "Newsroom",
        "Lending Partner",
    ];

    const listData2 = [
        "Terms and Condition",
        "Privacy Policy",
        "Lending T&C",
        "Grievances & Redressal"
    ];

    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Logo and About Section */}
                <div className="flex items-center">
                    {Logo}
                    <div className="ml-4">
                        <h1 className="text-lg font-semibold">Khatabook is India’s largest business management platform.</h1>
                        <div className="flex space-x-4 mt-4">
                            {socialMediaButton.map((item, index) => (
                                <a href={item} key={index} rel="noreferrer">
                                    <img src={`social-media-icon-${index}.svg`} alt={`Social Media ${index}`} className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Company Links */}
                <div className="md:col-span-2">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                        <div>
                            <h1 className="text-lg font-semibold">Company</h1>
                            <ul className="mt-4 space-y-2">
                                {listData1.map((item, index) => (
                                    <li key={index}>
                                        <a href="/" className="text-gray-300 hover:text-white">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold">Contact Us</h1>
                            <div className="mt-4 space-y-2">
                                <p><FaPhoneAlt className="inline-block mr-2" />+91-9606800800</p>
                                <p><CiMail className="inline-block mr-2" />feedback@khatabook.com</p>
                                <p><CiLocationOn className="inline-block mr-2" />1539, 18th Cross Road, Sector 3, HSR Layout, Bengaluru, Karnataka, India, 560102</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Legal and Copyright Section */}
            <div className="mt-8 border-t border-gray-700 pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <h3>© 2024 ADJ Utility Apps Private Limited, All rights reserved.</h3>
                    <ul className="flex space-x-4">
                        {listData2.map((item, index) => (
                            <li key={index}>
                                <a href="/" className="text-gray-300 hover:text-white">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
