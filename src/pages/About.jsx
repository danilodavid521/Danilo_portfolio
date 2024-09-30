

import CubeCarousel from "../components/CubeCarousel";
import { dessertImages } from "../constants/data";

export default function About() {
    return (
        <section className="w-[100%] mt-9 sm:mt-10 md:mt-11 flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
            <h1 className="text-center max-w-[18em]">About Naza</h1>
            {/* <img className="w-[300px] profile-border" src="/assets/images/ed-park.webp" alt="Profile of Naza" /> */}
            <p className="text-justify">Hello! My name is Naza. My primary focus centers on constructing and enhancing websites for businesses, helping them establish a robust digital presence.</p>
            <p className="text-justify">I have a Bachelor of Science in Computer Science from UNNOBA in Argentina. I built my web development with a passion for designing websites and solving problems to help businesses thrive.</p>
            <p className="text-center">Here are a few of previous projects:</p>
            <CubeCarousel name="desserts" carouselImages={dessertImages} />
            <p className="text-justify">My journey in web development is driven by the desire to make a meaningful impact on businesses and individuals alike. Combining my technical expertise, creativity, and dedication to continuous improvement, I strive to create compelling digital experiences that exceed expectations.</p>
        </section>
    );
}