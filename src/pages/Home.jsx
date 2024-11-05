
import { useOutletContext } from "react-router-dom";
import Projects from "../components/Projects";
import SplashSection from "../components/SplashSection";

export default function Home() {
    const [isDarkMode] = useOutletContext();

    return (
        <>
            <SplashSection splashMessage={'Danilo David'} isDarkMode={isDarkMode} isErrorMode={false} />
            <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
                <h1 className="text-center max-w-[18em]">Overview</h1>
                <p className="text-justify">Hello  As a passionate full-stack developer, I thrive on tackling challenging projects that require a clear, structured approach. My expertise spans both backend and frontend technologies, allowing me to create seamless, robust applications. Proficient in Node.js, React, Next.js, and Nest.js, Tailwind CSS, I enjoy delivering high-quality solutions that enhance user experience and performance.</p>
                <span className=""> Key Technical Skills:</span>
                <span>- React | Next.js | Vue.js | Angular.js | GSAP | Three.js <br /> <br />
                    - Javascript | Typescript | React Hooks | Redux | React Native<br /> <br />
                    - Node.js | Expressjs | PHP | Laravel | Nuxt.js | Nest.js <br /> <br />
                    - Tailwind CSS | Tailwind UI | Daisy UI | AntD | Bootstrap <br /> <br />
                    - Database (MongoDB | MySQL | PG SQL) <br/> <br />
                    - RESTful APIs, Socket.IO</span>

            </section>
            <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
                <h2>My Projects</h2>
                <Projects />
            </section>
        </>
    );
}