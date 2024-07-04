import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useState } from "react";
import ArticleCards from './ArticleCards';
import { sliderCardData } from "../../Data/Logo";


export default function ArticleSlider() {

    const [currentIndex, setCurrentIndex] = useState(0);

    function LeftArticleHandler() {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));

    }
    function RIghtArticleHandler() {
        setCurrentIndex((prevIndex) => (prevIndex === 9 ? 9 : prevIndex + 1));
    }

    return (
        <div className="relative h-fit rounded-lg p-4  bg-[#FDF2F3] text-black mt-[2rem] flex flex-col gap-[2rem] mx-auto  overflow-hidden max-h-[28rem]">
            <h2 className="font-bold text-xl underline mb-3 text-center ">Khatabook Blogs</h2>

            <div className=" flex flex-row  transition-all duration-300 gap-[5rem]" style={{ transform: `translateX(-${currentIndex === 9 ? currentIndex * 43 : currentIndex * 45}rem) ` }}>
                {sliderCardData.map((Num, index) => <ArticleCards key={index} image={Num.image} title={Num.title} desc={Num.desc} readMoreLink={Num.readMoreLink}></ArticleCards>)}

            </div>
            <div className="flex flex-row justify-between text-4xl mt-5">
                <button onClick={LeftArticleHandler} className='bg-white rounded-full text-red-600 p-2'>
                    <IoIosArrowBack></IoIosArrowBack>
                </button>
                <button onClick={RIghtArticleHandler} className='bg-white rounded-full text-red-600 p-2'>
                    <IoIosArrowForward></IoIosArrowForward>
                </button>
            </div>

        </div>
    );
}