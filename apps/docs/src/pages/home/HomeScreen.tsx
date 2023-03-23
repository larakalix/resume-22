import { useState } from "react";
import { motion } from "framer-motion";
import { div_config } from "../../configs/FramerMotion";
import { Banner } from "../../components/home/Banner";

import { Button, Title, TitleSize, NeedProject } from "@ui/kit";

type KitModule = {
  name: string;
  description: string;
  component: React.ReactNode;
};

const kitModules: KitModule[] = [
  {
    name: "SampleButton 1",
    description: "A sample button 1",
    component: <Button>Sample Button 1</Button>,
  },
  {
    name: "Title",
    description: "Component to render a title with different sizes",
    component: (
      <Title
        title="Sample title"
        inverted={false}
        size={TitleSize.small}
        className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-v-rounded py-10"
      />
    ),
  },
  {
    name: "NeedProject",
    description: "A contact banner",
    component: <NeedProject />,
  },
];

export const HomeScreen = () => {
  const [selection, setSelectionw] = useState(kitModules[0]);

  const handleClick = (module: KitModule) => {
    setSelectionw((prev) => (prev.name === module.name ? prev : module));
  };

  return (
    <motion.div {...div_config}>
      <div
        id="Welcome"
        className="flex items-center justify-center flex-col w-full m-auto md:max-w-5xl lg:max-w-7xl pt-10 pb-20"
      >
        <Banner />
      </div>
      <div
        id="kit-modules"
        className="flex items-center justify-center flex-col w-full m-auto md:max-w-5xl lg:max-w-7xl pt-10 pb-20"
      >
        <div className="flex w-full]">
          <section className="mx-10 border-v-border border rounded-v-rounded w-full md:w-[30vw] max-w-[22rem">
            <ul>
              {kitModules.map((module) => (
                <li
                  key={module.name}
                  className="text-v-gray block px-2 py-4 hover:opacity-90 w-full hover:cursor-pointer text-center"
                  onClick={() => handleClick(module)}
                >
                  {module.name}
                </li>
              ))}
            </ul>
          </section>

          <section className="w-full mx-10 flex items-center justify-center flex-col">
            <Title
              title={selection.name}
              inverted={false}
              size={TitleSize.small}
            />
            <p className="text-v-gray mb-8">{selection.description}</p>
            <>{selection.component}</>

            <div className="text-white mt-12">Form</div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
