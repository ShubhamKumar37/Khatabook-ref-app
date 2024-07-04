import FeatureSection from "./FeatureSection";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import ArticleSlider from "./Slider/ArticleSlider";
import StartKhataBook from "./StartKhataBook";



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