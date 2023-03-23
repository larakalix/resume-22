import { motion } from "framer-motion";
import { div_config } from "../../configs/FramerMotion";
import { Banner } from "../../components/home/Banner";
import { Skills } from "../../components/home/Skills";
import { LetsTalkButton } from "../../components/generic/LetsTalkButton";
import { HomePageProps } from "../../interfaces/pages/HomeProps";
import { LatestPost } from "../../components/home/LatestPost";
import { Projects } from "../../components/home/Projects";

export const HomeScreen = ({
  posts,
  skills,
  projects,
}: Partial<HomePageProps>) => {
  return (
    <motion.div {...div_config}>
      <div
        id="Welcome"
        className="min-h-[80vh] flex items-center justify-center flex-col w-full m-auto md:max-w-5xl lg:max-w-7xl"
      >
        <Banner />

        <div className="mt-12">
          <LetsTalkButton inverted />
        </div>
      </div>
      <div
        id="skills"
        className="min-h-screen flex items-center justify-center flex-col w-full m-auto md:max-w-5xl lg:max-w-7xl"
      >
        <Projects projects={projects!} />

        <LatestPost posts={posts!} />

        <Skills skills={skills} />
      </div>
    </motion.div>
  );
};
