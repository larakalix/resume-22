import { Paragraph } from "../../components/generic/Paragraph";
import { Title } from "../../components/generic/Title";

export const AboutScreen = () => {
    return (
        <div
            id="about"
            className="min-h-screen flex items-center justify-center flex-col p-8 m-auto md:max-w-5xl lg:max-w-7xl"
        >
            <Title title="My approach" inverted={false} className="mb-[4rem]" />

            <div className="max-w-5xl">
                <Paragraph
                    text="I'm a web developer, specialized in back end with ASP.NET
                Core, and front end with Angular and ReactJS. I've been
                working with those technologies (C#, JavaScript, TypeScript)
                since 4 years ago, also MS SQL and a bit of MongoDB. I have a
                Microsoft Professional Certification in HTML5, CSS3, and
                JavaScript."
                />

                <Paragraph
                    text="I love coding, I found in this, something I discovered on me, it
                seems like I can contribute a lot with the people who come to
                work with me, because one of my skills is being creative. I
                started as a web designer, just making some of visual coding and
                stylesheets, but since I knew about backend and frontend
                alternatives, I'm still growing my knowledge about
                development."
                />

                <Paragraph
                    text="So far I have experience in custom applications, ecommerce,
                micro web sites and Rest APIs. I'm open to grab another
                kind of knowledge respect to another programming languages, I am
                an active English student and kind of a lover of web/mobile
                development."
                />
            </div>
        </div>
    );
};
