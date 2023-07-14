import { motion } from "framer-motion";
import { div_config } from "../../configs/FramerMotion";
import { CvSkills } from "../../components/about/cv/CvSkills";
import { CvHeader } from "../../components/about/cv/CvHeader";
import { CvExpertise } from "../../components/about/cv/CvExpertise";

const headerInfo = {
    name: "Ivan Lara",
    title: "Full-stack Developer",
    location: "Managua, Nicaragua",
    phone: "+1 (954) 872 8450",
    email: "uki@live.co.uk",
    website: "www.kalixthedev.com/projects",
};

export const CvScreen = () => {
    return (
        <motion.div
            id="cv"
            className="min-h-screen flex items-center justify-start flex-col p-8 m-auto md:max-w-5xl lg:max-w-7xl font-montserrat"
            {...div_config}
        >
            <div className="flex w-full flex-col justify-start items-center">
                <CvHeader
                    name={headerInfo.name}
                    title={headerInfo.title}
                    location={headerInfo.location}
                    phone={headerInfo.phone}
                    email={headerInfo.email}
                    website={headerInfo.website}
                />

                <div className="w-full flex flex-wrap">
                    <CvSkills />

                    <CvExpertise />
                </div>
            </div>
        </motion.div>
    );
};
