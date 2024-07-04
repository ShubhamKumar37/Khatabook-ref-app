import FeatureSection from "../FeatureSection/FeatureSection";
import FooterSection from "../FooterSection/FooterSection";
import HeroSection from "../HeroSection/HeroSection";
import ArticleSlider from "../Slider/ArticleSlider";
import StartKhataBook from "../FeatureSection/StartKhataBook";



export default function HomePage()
{


    return (
        <div>
            <HeroSection></HeroSection>

            <FeatureSection></FeatureSection>

            <ArticleSlider></ArticleSlider>

            <StartKhataBook></StartKhataBook>

            <FooterSection></FooterSection>
        </div>
    );
}