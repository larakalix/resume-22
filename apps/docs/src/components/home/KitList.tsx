import type { KitModule } from "../../interfaces";

type Props = {
  kitModules: KitModule[];
  handleClick: (module: KitModule) => void;
};

export const KitList: React.FC<Props> = ({ kitModules, handleClick }) => {
  return (
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
  );
};
