import { Paragraph } from "../../components/generic/Paragraph";
import { Title } from "../../components/generic/Title";
import { motion } from "framer-motion";
import { div_config } from "../../configs/FramerMotion";
// import { about } from "../../data/data";
import { StaticPageContentProps } from "../../interfaces/pages/StaticPageContentProps";
import { InfoContent } from "../../components/about/InfoContent";

export const AboutScreen = ({ content }: StaticPageContentProps) => {
  const { title, description } = content;

  return (
    <motion.div
      id="about"
      className="min-h-screen flex items-center justify-center flex-col p-8 m-auto md:max-w-5xl lg:max-w-7xl"
      {...div_config}
    >
      <Title
        title={title}
        inverted={false}
        className="mb-[2rem] md:mb-[4rem]"
      />

      <InfoContent description={description} />
    </motion.div>
  );
};
