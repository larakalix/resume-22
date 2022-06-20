import { Paragraph } from "../../components/generic/Paragraph";
import { Title } from "../../components/generic/Title";
import { motion } from "framer-motion";
import { div_config } from "../../configs/FramerMotion";

export const AboutScreen = () => {
    return (
        <motion.div
            id="about"
            className="min-h-screen flex items-center justify-center flex-col p-8 m-auto md:max-w-5xl lg:max-w-7xl"
            {...div_config}
        >
            <Title
                title="My approach"
                inverted={false}
                className="mb-[2rem] md:mb-[4rem]"
            />

            <div className="max-w-full md:max-w-5xl">
                <Paragraph
                    text="I'm a web developer, specialized in back end with ASP.NET
                Core, and front end with Angular and ReactJS. I've been
                working with those technologies (C#, JavaScript, TypeScript)
                since 4 years ago, also MS SQL and a bit of MongoDB. I have a
                Microsoft Professional Certification in HTML5, CSS3, and
                JavaScript."
                />

                <Paragraph
                    text="I have a huge passion on coding, the idea of contribute with user experience
                is priceless, and I love the way that anyone while coding, could be so creative, and
                I believe this takes part of my own skillset. I
                started as a web designer, just making some of visual coding and
                stylesheets, but since I knew about backend and frontend
                alternatives, I'm still growing my knowledge about
                development."
                />

                <Paragraph
                    text="In conclusion, I have experience working on custom applications, ecommerce,
                micro web sites and Rest APIs. I'm open to grab another
                kind of knowledge respect to another programming languages, I'm
                an active English student and kind of a lover of web/mobile
                development."
                />
            </div>
        </motion.div>
    );
};
