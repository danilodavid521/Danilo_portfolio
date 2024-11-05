
import * as Icons from "../components/Icons";

export const navMenu = [
    {
        id: 'Home',
        href: '/',
    },
    {
        id: 'Services',
        href: '/services',
    },
    {
        id: 'About',
        href: '/about',
    },
    {
        id: 'Resume',
        href: '/resume',
    },
]

export const projects = [
    {
        title: 'Texture Effect',
        src: '/assets/images/projects/mindfit.png',
        altText: 'Screenshot of MindFit home page',
        ariaLabel: "Opens modal window with more information about the MindFit Mental Health web project",
        details: {
            description: "3D model configurator with react-three-fiber",
            technologies: [
                {
                    title: 'React',
                    Icon: Icons.ReactIcon,
                },
                {
                    title: 'CSS',
                    Icon: Icons.CSSIcon,
                },
                {
                    title: 'TailwindCSS',
                    Icon: Icons.TailwindCSSIcon,
                },

                {
                    title: 'Three.js',
                    Icon: Icons.DatabaseIcon,
                },
            ],
            url: 'https://60bce1be4d9b8cf97364d5ff--elastic-visvesvaraya-271c29.netlify.app/',
            githubUrl: 'https://github.com/nazabis0223/3d_react_model-configurator',
        },
    },
    {
        title: 'Mouse Scroll Effect',
        src: '/assets/images/projects/threeseeds.png',
        altText: 'Screenshot of ThreeSeeds home page',
        ariaLabel: "Opens modal window with more information about the ThreeSeeds web project",
        details: {
            description: "ThreeSeeds is a non-profit organization located in California. Their mission is to provide educational, employment, and entrepreneurial opportunities that build self-esteem and empowers one to become self-sufficient.",
            technologies: [
                {
                    title: 'Vuejs',
                    Icon: Icons.ReactIcon,
                },
                {
                    title: 'CSS',
                    Icon: Icons.CSSIcon,
                },

                {
                    title: 'GSAP',
                    Icon: Icons.ProgrammingIcon,
                },
                {
                    title: 'TailwindCSS',
                    Icon: Icons.TailwindCSSIcon,
                },

                {
                    title: 'JavaScript',
                    Icon: Icons.JavascriptIcon,
                },
            ],
            url: 'https://vue-js-landing-page.netlify.app/',
            githubUrl: 'https://github.com/nazabis0223/vuejs_landig-page',
        },
    },
    {
        title: '3D Blendering with Three.js',
        src: '/assets/images/projects/blended-concoctions.png',
        altText: 'Screenshot of Blended Concoctions home page',
        ariaLabel: "Opens modal window with more information about the Blended Concoctions web project",
        details: {
            description: "A coffee shop website designed using vanilla HTML, CSS, JavaScript, and a hint of jQuery.",
            technologies: [
                {
                    title: 'React',
                    Icon: Icons.ReactIcon,
                },
                {
                    title: 'JavaScript',
                    Icon: Icons.JavascriptIcon,
                },
                {
                    title: 'GSAP',
                    Icon: Icons.ProgrammingIcon,
                },
                {
                    title: 'CSS',
                    Icon: Icons.CSSIcon,
                },
                {
                    title: 'TailwindCSS',
                    Icon: Icons.TailwindCSSIcon,
                },
            ],
            url: "https://tractian-landing-page-nine.vercel.app/",
            githubUrl: 'https://github.com/nazabis0223/react_landing-page-gsap',
        },
    },

    {
        title: 'Car Rental Website',
        src: '/assets/images/projects/carh.png',
        altText: 'Screenshot of Blended Concoctions home page',
        ariaLabel: "Opens modal window with more information about the Blended Concoctions web project",
        details: {
            description: "A car rental website built with Next.js (App Router) and TypeScript featuring dynamic routing, a responsive UI with Tailwind CSS, Clerk authentication, Vercel Postgres, Drizzle ORM, and Cloudinary for images. It includes search filters, an infinite logo slider, and Stripe integration",
            technologies: [

                {
                    title: 'Three.js',
                    Icon: Icons.DatabaseIcon,
                },
                {
                    title: 'React',
                    Icon: Icons.ReactIcon,
                },
                {
                    title: 'JavaScript',
                    Icon: Icons.JavascriptIcon,
                },
                {
                    title: 'CSS',
                    Icon: Icons.CSSIcon,
                },
                {
                    title: 'TailwindCSS',
                    Icon: Icons.TailwindCSSIcon,
                },
            ],
            url: "https://three-js-nu-liart.vercel.app",
            githubUrl: 'https://github.com/nazabis0223/3D_Effect_threejs',
        },
    },

    {
        title: 'Threejs Landing Page with React.js',
        src: '/assets/images/projects/threeplan.png',
        altText: 'Screenshot of Blended Concoctions home page',
        ariaLabel: "Opens modal window with more information about the Blended Concoctions web project",
        details: {
            description: "Simple Landing Page built with React-Three-Fiber ( Three.js )",
            technologies: [
                
                {
                    title: 'Three.js',
                    Icon: Icons.DatabaseIcon,
                },
                {
                    title: 'React',
                    Icon: Icons.ReactIcon,
                },
                {
                    title: 'JavaScript',
                    Icon: Icons.JavascriptIcon,
                },
                {
                    title: 'CSS',
                    Icon: Icons.CSSIcon,
                },
                {
                    title: 'TailwindCSS',
                    Icon: Icons.TailwindCSSIcon,
                },
            ],
            url: "https://threejs-drone-landing-page.vercel.app",
            githubUrl: 'https://github.com/nazabis0223/threejs_landing-page',
        },
    },
]





export const testimonials = [
    {
        quote: "I am incredibly grateful for Naza's remarkable efforts of completely revamping our nonprofit's website. His dedication and expertise in enhancing the site's security measures while also ensuring a seamless user experience has been nothing short of exceptional. The new website not only boasts a robust security infrastructure that safeguards sensitive data, but it also welcomes visitors with an intuitive and user-friendly interface. Edward took our organization's mission to heart and translated it into an online platform that not only represents our values but also engages our audience effectively. His selfless commitment to improving our online presence has undoubtedly elevated our nonprofit's reach and impact. We owe him a debt of gratitude for his invaluable contribution in making our website a secure and inviting space for all.",
        name: 'Alicia P.',
        title: 'Executive Director of Three Seeds Organization',
        src: '/assets/images/testimonials/alicia.webp',
        altText: 'Profile of Alicia P.',
    }
]

export const techSkills = [
    {
        category: 'Front-End Development',
        skills: [
            {
                title: 'React',
                Icon: Icons.ReactIcon,
            },
            
            {
                title: 'Node.js',
                Icon: Icons.NodeJSIcon,
            },
            
            {
                title: 'Tailwind CSS',
                Icon: Icons.TailwindCSSIcon,
            },
            {
                title: 'SASS, SCSS',
                Icon: Icons.SassIcon,
            },
            {
                title: 'PHP',
                Icon: Icons.PHPIcon,
            },
            {
                title: 'jQuery',
                Icon: Icons.JQueryIcon,
            },

            {
                title: 'JavaScript',
                Icon: Icons.JavascriptIcon,
            },
            {
                title: 'HTML',
                Icon: Icons.HtmlIcon,
            },
            
            {
                title: 'Express',
                Icon: Icons.ExpressJSIcon,
            },
            
            
            {
                title: 'SQL',
                Icon: Icons.SqlServerIcon,
            },
        ],
    },
    {
        category: 'Back-End Development',
        skills: [
            {
                title: 'NodeJS',
                Icon: Icons.NodeJSIcon,
            },
            {
                title: 'ExpressJS',
                Icon: Icons.ExpressJSIcon,
            },
            {
                title: 'SQL Server',
                Icon: Icons.SqlServerIcon,
            },
            {
                title: 'MongoDB',
                Icon: Icons.MongoDBIcon,
            },
            {
                title: 'SSRS',
                Icon: Icons.SsrsIcon,
            },
        ],
    },
    {
        category: 'Build Tools, Frameworks, and Versioning',
        skills: [
            {
                title: 'Vite',
                Icon: Icons.ViteIcon,
            },
            {
                title: 'Git',
                Icon: Icons.GitIcon,
            },
            {
                title: 'GitHub',
                Icon: Icons.GitHubIcon,
            },
        ],
    },
    {
        category: 'Design and Prototyping',
        skills: [
            {
                title: 'Responsive Design',
                Icon: Icons.ResponsiveDesignIcon,
            },
            {
                title: 'Pen and Paper',
                Icon: Icons.SketchingIcon,
            },
            {
                title: 'Figma',
                Icon: Icons.FigmaIcon,
            },
        ],
    },
];

export const softSkills = [
    {
        title: 'Creativity',
        Icon: Icons.BrightIdeaIcon,
    },
    {
        title: 'Teamwork',
        Icon: Icons.TeamworkIcon,
    },
    {
        title: 'Public Speaking',
        Icon: Icons.PublicSpeakingIcon,
    },
    {
        title: 'Time Management',
        Icon: Icons.ScheduleIcon,
    },
];

export const workExp = [
    {
        company: 'Duservis',
        location: '',
        positions: [
            {
                title: 'Full Stack Developer',
                startDate: new Date(2022, 4),
                endDate: new Date(2024, 8),
            },
        ],
        tasks: [
            "As a full-stack developer, I integrated front-end and back-end technologies using TypeScript and Redux, while creating dynamic web applications with GSAP animations and real-time API data, ensuring high client satisfaction",
        ],
    },
    {
        company: 'Santa Fe',
        location: '',
        positions: [
            {
                title: 'Front-End Developer',
                startDate: new Date(2020, 11),
                endDate: new Date(2022, 3),
            },
        ],
        tasks: [
            "Experienced frontend developer skilled in React, Next.js, and Vue.js. Proficient in Tailwind CSS for responsive designs, ensuring optimal user experiences.",
        ],
    },
    {
        company: 'Infra Fort Itabira',
        location: '',
        positions: [
            {
                title: 'Junior Web Developer',
                startDate: new Date(2029, 5),
                endDate: new Date(2020, 10),
            },
        ],
        tasks: [
            "Developed dynamic web applications using Node.js and PHP, enhancing user engagement with jQuery and HTML.",
            
        ],
    },
];

export const educations = [
    {
        degree: 'Bachelor of Computer Science (BCompSc), Computer science',
        school: 'Centro Universitario UNA',
        startDate: new Date(2015, 4),
        endDate: new Date(2029, 2),
        location: 'Minas Gerais',
    },
];

export const dessertImages = [
    {
        src: '/assets/images/desserts/1.png',
        altText: 'Oreo cupcakes with the toastmasters club 10th anniversary cupcake topper',
        // value: 'oreo-cupcakes',
        // label: 'Oreo cupcakes',
    },
    {
        src: '/assets/images/desserts/2.png',
        altText: 'Large cake decorated to look like an everything bagel',
        // value: 'bagel-cake',
        // label: 'Everything bagel cake',
    },
    {
        src: '/assets/images/desserts/3.png',
        altText: 'Cheese souffle in a ramekin',
        // value: 'souffle',
        // label: 'Cheese souffle',
    },
    {
        src: '/assets/images/desserts/4.png',
        altText: 'Plate of chocolate chip cookies',
        // value: 'cookies',
        // label: 'Chocolate chip cookies',
    },
    {
        src: '/assets/images/desserts/5.png',
        altText: 'Red velvet cupcake with cream cheese frosting with a strawberry macaron on top',
        // value: 'macaron-cupcakes',
        // label: 'Red velvet cupcake',
    },
    {
        src: '/assets/images/desserts/6.png',
        altText: 'Cannoli cupcakes with chocolate chips on top',
        // value: 'cannoli-cupcakes',
        // label: 'Cannoli cupcakes',
    },
];

export const generalServices = [
    {
        title: 'Full Stack Development',
        description: "As a full-stack developer, I integrated front-end and back-end technologies using TypeScript and Redux, while creating dynamic web applications with GSAP animations and real-time API data, ensuring high client satisfaction.",
        Icon: Icons.TargetIcon,
    },
    {
        title: 'Front-End Development',
        description: "Experienced frontend developer skilled in React, Next.js, and Vue.js. Proficient in Tailwind CSS for responsive designs, ensuring optimal user experiences.",
        Icon: Icons.WebDesignIcon,
    },
    {
        title: 'Junior Web Deelopment',
        description: "Developed dynamic web applications using Node.js and PHP, enhancing user engagement with jQuery and HTML.",
        Icon: Icons.ServerIcon,
    },
];

export const specialties = [
    {
        title: 'Database',
        Icon: Icons.DatabaseIcon,
    },
    {
        title: 'Node.js',
        Icon: Icons.ProgrammingIcon,
    },
    {
        title: 'Portfolio Websites with animation',
        Icon: Icons.PortfolioIcon,
    },
    {
        title: 'Modern WebSite',
        Icon: Icons.WebContentIcon,
    },
    {
        title: 'Web Performance Optimization',
        Icon: Icons.RocketIcon,
    },
    {
        title: 'Website Maintenance',
        Icon: Icons.ToolsIcon,
    },
    {
        title: 'Website Migration',
        Icon: Icons.LeftRightArrowsIcon,
    },
];