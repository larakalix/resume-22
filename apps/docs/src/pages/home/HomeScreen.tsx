import { useState } from "react";
import { motion } from "framer-motion";
import { div_config } from "../../configs/FramerMotion";
import { Banner } from "../../components/home/Banner";

import { Button, Title, TitleSize, NeedProject, LetsTalkButton } from "@ui/kit";
import type { KitModule } from "../../interfaces";
import { KitList } from "../../components/home/KitList";
import { KitSelected } from "../../components/home/KitSelected";

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
  {
    name: "LetsTalkButton",
    description: "A button to contact me",
    component: <LetsTalkButton inverted={false} />,
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
          <KitList kitModules={kitModules} handleClick={handleClick} />

          <KitSelected selection={selection} />
        </div>
      </div>
    </motion.div>
  );
};
