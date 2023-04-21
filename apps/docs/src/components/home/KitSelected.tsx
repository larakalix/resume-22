import React from "react";

import { Title, TitleSize } from "@ui/kit";
import { KitModule } from "../../interfaces";

type Props = {
  selection: KitModule;
};

export const KitSelected: React.FC<Props> = ({ selection }) => {
  return (
    <section className="w-full mx-10 flex items-center justify-center flex-col">
      <Title title={selection.name} inverted={false} size={TitleSize.small} />
      <p className="text-v-gray mb-8">{selection.description}</p>
      <>{selection.component}</>

      <div className="text-white mt-12">Form</div>
    </section>
  );
};
