
import { useOutletContext } from "react-router-dom";
import Projects from "../components/Projects";
import SplashSection from "../components/SplashSection";

export default function Home() {
    const [isDarkMode] = useOutletContext();

    return (
        <>
            <SplashSection splashMessage={'Nazareno Biscayart'} isDarkMode={isDarkMode} isErrorMode={false} />
            <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
                <h1 className="text-center max-w-[18em]">Overview</h1>
                <p className="text-justify">Hello   As a Three.js, WebGL, 3D animation Developer with a strong passion for performance optimization and post-processing effects, I pay attention to your vision sincerely and implement it with efficiency and speed.I can also help you to build complex projects (websites) to help manage, display and bring profits to your business.</p>
                <span className=""> Key Technical Skills:</span>
                <span>-Three.js | WebGL | GSAP | Canvas <br />
                    - Javascript | Typescript | React | React Hooks | Redux | React Native<br />
                    - Next.js | Nuxt.js | Node.js | Nest.js<br />
                    - CSS frameworks (Tailwind UI | MUI | Daisy UI | AntD | Bootstrap | Styled Components)<br />
                    - Database (MongoDB | MySQL | PG SQL)</span>

            </section>
            <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
                <h2>My Projects</h2>
                <Projects />
            </section>
        </>
    );
}